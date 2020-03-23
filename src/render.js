export default (filesWithPath) => (
  filesWithPath.map((item) => `File "${item.file}" was here: "${item.pathToDirSearch}"`)
).join('\n');
