import path from 'path';
import fs from 'fs';
import { filterByFileType, filterByIgnoreFile } from '../utils';

export default ({ pathToDirSearch, ext, ignoreFile }) => {
  const iter = (pathTo) => {
    const contents = fs.readdirSync(pathTo);
    return contents.map((curr) => {
      const isDirectory = fs.statSync(path.join(pathTo, curr)).isDirectory();

      if (isDirectory) {
        return iter(path.join(pathTo, curr));
      }

      const file = filterByFileType(curr, ext)
        |> ((_) => filterByIgnoreFile(_, ignoreFile));

      return file && { file, pathToDirSearch: pathTo };
    });
  };

  return iter(pathToDirSearch).flat(Infinity).filter(Boolean);
};
