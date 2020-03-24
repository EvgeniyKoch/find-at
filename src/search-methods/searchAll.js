import path from 'path';
import fs from 'fs';

export default ({ pathToDir, searchPattern }) => {
  const fullPath = path.join(pathToDir, searchPattern);
  const contents = fs.readdirSync(fullPath);

  return contents.map((filename) => ({ file: filename, pathToDirSearch: fullPath }));
};
