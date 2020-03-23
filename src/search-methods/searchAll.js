import path from 'path';
import fs from 'fs';

export default (pathToDir, searchPattern) => {
  const fullPath = path.join(pathToDir, searchPattern);
  const contents = fs.readdirSync(fullPath);

  return contents.map((filename) => ({ value: 'Directory', file: filename, pathToDirSearch: fullPath }));
};
