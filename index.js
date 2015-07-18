/* eslint no-var:0, no-sync: 0 */

'use strict';

var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var CONFIG_PATH = path.join(__dirname, 'config.yaml');
var configFile = fs.readFileSync(CONFIG_PATH, 'utf8');
var config = yaml.safeLoad(configFile);

module.exports = config;
