import path from 'path';
import searchAllFilesOfAllDirectories from './searchAllFilesOfAllDirectories';
import searchAllFilesOfDirectory from './searchAllFilesOfDirectory';
import searchFileOfDirectory from './searchFileOfDirectory';
import searchAll from './searchAll';

const searchActions = [
  {
    checked: (isSearchFiles, isSearchDirs) => (isSearchDirs && isSearchFiles),
    action: searchAllFilesOfAllDirectories,
  },
  {
    checked: (isSearchFiles) => !!isSearchFiles,
    action: searchAllFilesOfDirectory,
  },
  {
    checked: (isSearchFiles, isSearchDirs, ext) => (!isSearchFiles && !!ext),
    action: searchFileOfDirectory,
  },
  {
    checked: (isSearchFiles, isSearchDirs, ext) => (!isSearchFiles && !isSearchDirs && !ext),
    action: searchAll,
  },
];

const findAction = (...arg) => searchActions.find(({ checked }) => checked(...arg));

export default (pathToDir, searchPattern, ignoreFiles) => {
  const {
    dir, base, ext, name,
  } = path.parse(searchPattern);
  const dirs = dir.split('/');
  const isSearchDirs = dirs[dirs.length - 1] === '**';
  const isSearchFiles = name === '*';
  const filteredDirs = dirs.filter((d) => d !== '**');
  const pathToDirSearch = path.join(pathToDir, filteredDirs.join('/'));
  const config = {
    pathToDirSearch, ext, ignoreFiles, base, pathToDir, searchPattern,
  };
  const { action } = findAction(isSearchFiles, isSearchDirs, ext);

  return action(config);
};
