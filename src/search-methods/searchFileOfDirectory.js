import fs from 'fs';
import { filterByFileType, filterByFile } from '../utils';

export default (pathToDirSearch, ext, filename) => {
  const contents = fs.readdirSync(pathToDirSearch);
  return contents.map((curr) => {
    const file = filterByFileType(curr, ext)
      |> ((_) => filterByFile(_, filename));

    return file && { file, pathToDirSearch };
  })
    .filter(Boolean);
};
