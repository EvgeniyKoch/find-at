import path from 'path';
import fs from 'fs';
import search from '../src';

const getFixturePath = (filename) => path.join(__dirname, '__fixtures__', filename);
const getExpectedResult = (filename) => fs.readFileSync(getFixturePath(filename), 'utf8');

describe('search:', () => {
  test('should show all scripts found in all directories in the given path', () => {
    const result = getExpectedResult('expectedValueAllFilesOfAllDirectories.txt');

    expect(search('src', 'search-methods/**/*.js')).toBe(result);
  });

  test('should show all scripts found in all directories in the given path except ignored', () => {
    const result = getExpectedResult('expectedValueFilesOfAllDirectories.txt');

    expect(search('src', 'search-methods/**/*.js', 'searchAll.js')).toBe(result);
  });

  test('should find the index.js file in all directories at the specified path and print', () => {
    const result = 'File "index.js" was here: "src/search-methods"\n';

    expect(search('src', 'search-methods/**/index.js')).toBe(result);
  });

  test('should find the index.js file in all directories at the specified path and print', () => {
    const result = 'File "index.js" was here: "src/search-methods"\n';

    expect(search('src', 'search-methods/**/index.js')).toBe(result);
  });
});
