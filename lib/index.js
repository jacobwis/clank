#!/usr/bin/env node
'use strict';

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

var _commands = require('./commands');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1');

_commander2.default.command('new [name]').description('creates new React project in the current directory').action(function (name) {
  (0, _commands.newProject)();
});

_commander2.default.parse(process.argv);