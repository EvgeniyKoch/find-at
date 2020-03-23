import path from 'path';

export const filterByFileType = (file, ext) => (path.extname(file) === ext ? file : null);
export const filterByIgnoreFile = (file, ignoreFile) => (file !== ignoreFile ? file : null);
export const filterByFile = (filename, currentFile) => (filename === currentFile ? filename : null);
