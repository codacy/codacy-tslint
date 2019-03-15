import {
  RawConfigFile,
  RawRuleConfig,
  RawRulesConfig
} from 'tslint/lib/configuration';
import readFile from './util/file';

type ParameterValueScalar = string | number | boolean | object;
interface ParameterValueArray {
  readonly [index: number]: ParameterValueScalar | ParameterValueArray;
}

export type ParameterValue =
  | ParameterValueScalar
  | ParameterValueArray
  | ReadonlyArray<any>;

export const EmptyConfiguration: Configuration = {};

export interface Configuration {
  readonly files?: ReadonlyArray<string>;
  readonly rawConfig?: RawConfigFile;
}

interface CodacyParameter {
  readonly name: string;
  readonly value: ParameterValue;
}

interface CodacyPattern {
  readonly patternId: string;
  readonly parameters?: ReadonlyArray<CodacyParameter>;
}

interface CodacyTool {
  readonly name: string;
  readonly patterns?: ReadonlyArray<CodacyPattern>;
}

interface CodacyDefaultTool {
  readonly name: string;
  readonly patterns?: ReadonlyArray<CodacyDefaultPattern>;
}

interface CodacyDefaultPattern {
  readonly patternId: string;
  readonly parameters?: ReadonlyArray<CodacyDefaultParameter>;
}

interface CodacyDefaultParameter {
  readonly name: string;
  readonly default: ParameterValue;
}

interface CodacyConfiguration {
  readonly files: ReadonlyArray<string>;
  readonly tools?: ReadonlyArray<CodacyTool>;
}

export default function configFromCodacy(
  configPath?: string,
  fallbackPatternsPath?: string
): Configuration {
  const codacyConfig = parseCodacyConfiguration(configPath);

  if (!codacyConfig) {
    return {};
  }

  return {
    files: codacyConfig.files,
    rawConfig: getRawConfigFile(codacyConfig, fallbackPatternsPath)
  };
}

function loadFileSync(path: string): string | undefined {
  const content = readFile(path);

  if (!content) {
    return;
  }

  return content;
}

function parseCodacyConfiguration(
  configPath?: string
): CodacyConfiguration | undefined {
  const path = configPath || '/.codacyrc';
  const configFileContents = loadFileSync(path);

  if (!configFileContents) {
    return;
  }

  try {
    const codacyConfig = JSON.parse(configFileContents) as CodacyConfiguration;
    return codacyConfig;
  } catch (err) {
    // tslint:disable-next-line:no-expression-statement
    process.stderr.write(`${err}\n`);
    process.exit(50);
    return;
  }
}

function loadDefaultPatterns(
  fallbackPatternsPath?: string
): CodacyDefaultTool | undefined {
  const path = fallbackPatternsPath || '/docs/patterns.json';
  const defaultPatterns = loadFileSync(path);

  if (!defaultPatterns) {
    return;
  }
  try {
    const tool = JSON.parse(defaultPatterns) as CodacyDefaultTool;
    return tool;
  } catch (err) {
    // tslint:disable-next-line:no-expression-statement
    process.stderr.write(`${err}\n`);
    process.exit(50);
    return;
  }
  return;
}

function getDefaultParameterForPattern(
  patternId: string,
  fallbackPatternsPath?: string
): ParameterValue | boolean {
  const tool = loadDefaultPatterns(fallbackPatternsPath);
  if (!tool || !tool.patterns) {
    return true;
  }

  const pattern = tool.patterns.find(
    toolPattern => toolPattern.patternId === patternId
  );
  if (!pattern) {
    return true;
  }

  if (!pattern.parameters || pattern.parameters.length === 0) {
    return true;
  }

  const parameter = pattern.parameters[0];
  return parameter.default;
}

function getRawConfigFile(
  codacyConfig: CodacyConfiguration,
  fallbackPatternsPath?: string
): RawConfigFile | undefined {
  if (codacyConfig.tools) {
    const toolPatterns = codacyConfig.tools.find(
      (tool: CodacyTool) => tool.name === 'tslint'
    );

    if (toolPatterns && toolPatterns.patterns) {
      const rulesArray: ReadonlyArray<
        RawRulesConfig
      > = toolPatterns.patterns.map((pattern: CodacyPattern) => {
        const parameter =
          pattern.parameters && pattern.parameters.length === 1
            ? pattern.parameters[0].value
            : getDefaultParameterForPattern(
                pattern.patternId,
                fallbackPatternsPath
              );

        const wrappedParameter: RawRuleConfig =
          typeof parameter === 'boolean' || parameter instanceof Array
            ? parameter
            : [parameter];

        return { [pattern.patternId]: wrappedParameter };
      });

      const rules =
        rulesArray.length < 2
          ? rulesArray[0] || {}
          : rulesArray.reduce((previousValue, currentValue) => {
              return { ...previousValue, ...currentValue };
            });

      return { rules };
    }
  }

  return;
}
