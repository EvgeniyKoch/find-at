import path from 'path';
import searchAllFilesOfAllDirectories from './searchAllFilesOfAllDirectories';
import searchAllFilesOfDirectory from './searchAllFilesOfDirectory';
import searchFileOfDirectory from './searchFileOfDirectory';
import searchAll from './searchAll';

export default (pathToDir, searchPattern, ignoreFiles) => {
  const {
    dir, base, ext, name,
  } = path.parse(searchPattern);
  const dirs = dir.split('/');
  const isSearchDirs = dirs[dirs.length - 1] === '**';
  const isSearchFiles = name === '*';
  const filteredDirs = dirs.filter((d) => d !== '**');
  const pathToDirSearch = path.join(pathToDir, filteredDirs.join('/'));

  if (isSearchDirs && isSearchFiles) {
    return searchAllFilesOfAllDirectories(pathToDirSearch, ext, ignoreFiles);
  }

  if (isSearchFiles) {
    return searchAllFilesOfDirectory(pathToDirSearch, ext, ignoreFiles);
  }

  if (!isSearchFiles && ext !== '') {
    return searchFileOfDirectory(pathToDirSearch, ext, base);
  }

  return searchAll(pathToDir, searchPattern);
};
