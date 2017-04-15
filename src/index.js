#!/usr/bin/env node
import commander from 'commander';
import { newProject } from './commands';

commander
  .version('0.0.1');

commander
  .command('new [name]')
  .description('creates new React project in the current directory')
  .action((name) => {
    newProject();
  })


commander.parse(process.argv);
