// @flow
import chalk from 'chalk';
import memfs from 'mem-fs';
import editor from 'mem-fs-editor';
import path from 'path';
import fs from 'fs';

const error = chalk.red.bold;

type Options = {
  stateful: boolean,
  connected: boolean,
}

function newComponentCommand(name: string, options: Options) {
  console.log(`Creating new component: ${chalk.bold.blue(name)}`);
  const filePath = path.join(process.cwd(), `/src/components/${name}/`);
  if (fs.existsSync(filePath)) {
    console.log(error('Something went wrong:\n'));
    console.log(`\t * ${filePath} already exists. \n`);
    return;
  }
  const store = memfs.create();
  const virtfs = editor.create(store);

  const templatePath = path.resolve(__dirname, '../../templates/component/');
  const componentTpl = options.stateful ? 'statefulComponent.js' : 'component.js';
  const indexTpl = options.connected ? 'indexConnected.js' : 'index.js';

  virtfs.copyTpl(
    path.join(templatePath, componentTpl),
    `src/components/${name}/${name}.js`,
    { name },
  );
  virtfs.copyTpl(
    path.join(templatePath, indexTpl),
    `src/components/${name}/index.js`,
    { name },
  );
  virtfs.commit([], () => {

  });
}

export default newComponentCommand;
