import fs from 'fs';
import { filterByFileType, filterByIgnoreFile } from '../utils';

export default (pathToDirSearch, ext, ignoreFile) => {
  const contents = fs.readdirSync(pathToDirSearch);
  return contents.map((curr) => {
    const file = filterByFileType(curr, ext)
      |> ((_) => filterByIgnoreFile(_, ignoreFile));

    return file && { file, pathToDirSearch };
  })
    .filter(Boolean);
};
