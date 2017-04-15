'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _memFs = require('mem-fs');

var _memFs2 = _interopRequireDefault(_memFs);

var _memFsEditor = require('mem-fs-editor');

var _memFsEditor2 = _interopRequireDefault(_memFsEditor);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = _chalk2.default.red.bold;

function newProjectCommand(name) {
  console.log('Creating new project: ' + _chalk2.default.bold.blue(name));
  var projectPath = _path2.default.join(process.cwd(), '/' + name + '/');
  if (_fs2.default.existsSync(projectPath)) {
    console.log(error('Something went wrong:\n'));
    console.log('\t * ' + projectPath + ' already exists. \n');
    return;
  }

  var store = _memFs2.default.create();
  var virtfs = _memFsEditor2.default.create(store);
  var templatePath = _path2.default.resolve(__dirname, '../../templates/');
  virtfs.copyTpl(_glob2.default.sync(_path2.default.join(templatePath, 'app/**'), { dot: true }), '' + name, { name: name });
  virtfs.commit([], function () {});
}

exports.default = newProjectCommand;