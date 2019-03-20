// tslint:disable:no-expression-statement
import test from 'ava';
import * as path from 'path';
import run from './tslint-runner';

test('run integration test no-magic-numbers and interface-name', async t => {
  const testsPath = path.join(
    process.cwd(),
    'test_samples/repositories/integration'
  );
  const results = await run({
    codacyConfigPath: `${testsPath}/codacyrc`,
    sourcePath: testsPath
  });

  t.deepEqual(results, [
    {
      file: 'test.ts',
      line: 5,
      message: 'interface name must start with a capitalized I',
      patternId: 'interface-name'
    },
    {
      file: 'test.ts',
      line: 9,
      message: "'magic numbers' are not allowed: 42.42",
      patternId: 'no-magic-numbers'
    }
  ]);
});

test('pattern without configuration should fallback to default values in patterns.json', async t => {
  const testsPath = path.join(
    process.cwd(),
    'test_samples/repositories/integration'
  );

  const patternsPath = path.join(process.cwd(), 'docs/patterns.json');

  const results = await run({
    codacyConfigPath: `${testsPath}/codacyrc-pattern-fallback`,
    fallbackPatterns: patternsPath,
    sourcePath: testsPath
  });

  t.deepEqual(results, [
    {
      file: 'test-pattern-fallback.ts',
      line: 1,
      message: 'Exceeds maximum line length of 120',
      patternId: 'max-line-length'
    }
  ]);
});
