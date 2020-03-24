import fs from 'fs';
import path from 'path';

export default ({ pathToDirSearch, base: filename }) => {
  const iter = (pathTo) => {
    const contents = fs.readdirSync(pathTo);
    return contents.map((curr) => {
      const isDirectory = fs.statSync(path.join(pathTo, curr)).isDirectory();
      if (isDirectory && curr !== filename) {
        return iter(path.join(pathTo, curr));
      }

      if (curr === filename) {
        return { file: curr, pathToDirSearch: pathTo };
      }

      return null;
    });
  };

  return iter(pathToDirSearch).flat(Infinity).filter(Boolean);
};
