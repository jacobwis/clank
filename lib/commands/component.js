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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var error = _chalk2.default.red.bold;


function newComponentCommand(name, options) {
  console.log('Creating new component: ' + _chalk2.default.bold.blue(name));
  var filePath = _path2.default.join(process.cwd(), '/src/components/' + name + '/');
  if (_fs2.default.existsSync(filePath)) {
    console.log(error('Something went wrong:\n'));
    console.log('\t * ' + filePath + ' already exists. \n');
    return;
  }
  var store = _memFs2.default.create();
  var virtfs = _memFsEditor2.default.create(store);

  var templatePath = _path2.default.resolve(__dirname, '../../templates/component/');
  var componentTpl = options.stateful ? 'statefulComponent.js' : 'component.js';
  var indexTpl = options.connected ? 'indexConnected.js' : 'index.js';

  virtfs.copyTpl(_path2.default.join(templatePath, componentTpl), 'src/components/' + name + '/' + name + '.js', { name: name });
  virtfs.copyTpl(_path2.default.join(templatePath, indexTpl), 'src/components/' + name + '/index.js', { name: name });
  virtfs.commit([], function () {});
}

exports.default = newComponentCommand;