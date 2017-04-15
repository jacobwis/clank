#!/usr/bin/env node
import commander from 'commander';
import chalk from 'chalk';
import pkginfo from 'pkginfo';
import { newProjectCommand } from './commands';

pkginfo(module);

commander
  .version('0.0.1');

commander
  .command('new [name]')
  .description('creates new React project in the current directory')
  .action((name) => {
    const start = new Date();
    console.log(chalk.bold(`\nclank new v${module.exports.version}`));
    newProjectCommand(name);
    const elapsed = (new Date() - start) / 1000;
    console.log(`🕰️  Done in ${elapsed}s\n`);
  });

commander.parse(process.argv);
