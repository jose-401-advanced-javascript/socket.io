jest.mock('../modules/file-reader', () => {
  return () => Promise.resolve('test text');
});

jest.mock('../modules/file-save', () => {
  return () => Promise.resolve('test text');
});

describe('app', () => {
  const fileReader = require('../modules/file-reader');
  const fileWriter = require('../modules/file-save');

  it('read a file', () => {
    const source = './example.tx';

    return fileReader(source)
      .then(contents => {
        expect(contents).toEqual('test text');
      });
  });

  it('write a file', () => {
    const source = './example.tx';

    return fileWriter(source)
      .then(contents => {
        expect(contents).toEqual('test text');
      });
  });
});
