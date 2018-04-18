import { name as PROJECT_NAME } from '../package.json';
import BinaryenPlugin from '../src';

describe(PROJECT_NAME, () => {
  test('should export the loader', (done) => {
    expect(BinaryenPlugin).toBeInstanceOf(Function);
    done();
  });
});

