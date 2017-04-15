#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pkginfo = require('pkginfo');

var _pkginfo2 = _interopRequireDefault(_pkginfo);

var _commands = require('./commands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _pkginfo2.default)(module);

_commander2.default.version('0.0.1');

_commander2.default.command('new [name]').description('creates new React project in the current directory').action(function (name) {
  var start = new Date();
  console.log(_chalk2.default.bold('\nclank new v' + module.exports.version));
  (0, _commands.newProjectCommand)(name);
  var elapsed = (new Date() - start) / 1000;
  console.log('\uD83D\uDD70\uFE0F  Done in ' + elapsed + 's\n');
});

_commander2.default.command('component [name]').description('creates new component in the /components directory').option('-s, --stateful', 'Creates a stateful React component.').option('-c, --connected', 'Connects component to Redux store.').action(function (name, options) {
  var stateful = options.stateful || false;
  var connected = options.connected || false;
  (0, _commands.newComponentCommand)(name, {
    stateful: stateful,
    connected: connected
  });
});

_commander2.default.parse(process.argv);