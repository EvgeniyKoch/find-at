import findFilesWithPath from './search-methods';
import render from './render';

export default (pathToDir, searchPattern, ignoreFiles) => {
  const filesWithPath = findFilesWithPath(pathToDir, searchPattern, ignoreFiles);
  const view = render(filesWithPath);
  const print = view || 'No matches found.';

  return `${print}\n`;
};
