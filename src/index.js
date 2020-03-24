import 'source-map-support/register';
import findFilesWithPath from './search-methods';
import render from './render';

export default (pathToDir, searchPattern, ignoreFiles) => {
  const filesWithPaths = findFilesWithPath(pathToDir, searchPattern, ignoreFiles);
  const view = render(filesWithPaths);
  const print = view || 'No matches found.';

  return `${print}\n`;
};
