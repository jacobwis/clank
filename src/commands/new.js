// @flow
import chalk from 'chalk';
import memfs from 'mem-fs';
import editor from 'mem-fs-editor';
import path from 'path';
import fs from 'fs';
import glob from 'glob';

const error = chalk.red.bold;

function newProjectCommand(name: string) {
  console.log(`Creating new project: ${chalk.bold.blue(name)}`);
  const projectPath = path.join(process.cwd(), `/${name}/`);
  if (fs.existsSync(projectPath)) {
    console.log(error('Something went wrong:\n'));
    console.log(`\t * ${projectPath} already exists. \n`);
    return;
  }

  const store = memfs.create();
  const virtfs = editor.create(store);
  const templatePath = path.resolve(__dirname, '../../templates/');
  virtfs.copyTpl(
    glob.sync(path.join(templatePath, 'app/**'), { dot: true }),
    `${name}`,
    { name },
  );
  virtfs.commit([], () => {

  });
}

export default newProjectCommand;
