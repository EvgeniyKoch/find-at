# Program CLI for searching files by pattern

## Description
Within the framework of this project, a utility has been implemented to search for a file (s) in a specified directory.

### Install:
```npm install -g find-at```

### Utility features:

- Search all file(s) in all directories
- Search all files in all directories, except not need
- Search for specific file
- Report generation in the form of plain text

### Instruction:
The utility takes three parameters \<dir> \<pattern> [ignore]

- \<dir> - Required arguments. The path to the directory in which the search is performed.
- \<pattern> - Required arguments. The template to be searched for, for example: ```src/**/*.ts```
- \[ignore] - Optional arguments. The name of the file to exclude from the search

### Usage example:
```
$ search node_modules @babel/generator/**/*.js index.js
File "buffer.js" was here: "node_modules/@babel/generator/lib"
File "base.js" was here: "node_modules/@babel/generator/lib/generators"
File "classes.js" was here: "node_modules/@babel/generator/lib/generators"
File "expressions.js" was here: "node_modules/@babel/generator/lib/generators"
File "flow.js" was here: "node_modules/@babel/generator/lib/generators"
File "jsx.js" was here: "node_modules/@babel/generator/lib/generators"
File "methods.js" was here: "node_modules/@babel/generator/lib/generators"
File "modules.js" was here: "node_modules/@babel/generator/lib/generators"
File "statements.js" was here: "node_modules/@babel/generator/lib/generators"
```

### **Attention:**
If get an error ``zsh: no matches found: ``, when you enter a template type `src/example/\*\*/*.js``, something that would get rid of her type in the console ```setopt +o nomatch```. 
More info here [here](http://zsh.sourceforge.net/Doc/Release/Options.html#Expansion-and-Globbing).

### Video instruction: 

[![asciicast](https://asciinema.org/a/2mnDjGyYE87FkCucyXPSK54hq.svg)](https://asciinema.org/a/2mnDjGyYE87FkCucyXPSK54hq)
