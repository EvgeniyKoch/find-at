#!/usr/bin/env node
import commander from 'commander';
import search from '../index';

const program = new commander.Command();

program
  .version('0.0.1')
  .description('Searches all files for a given path.')
  .arguments('<pathToDir> <search> [ignore]')
  .action((firstConfig, secondConfig, thirdConfig) => (
    console.log(search(firstConfig, secondConfig, thirdConfig))))
  .parse(process.argv);
