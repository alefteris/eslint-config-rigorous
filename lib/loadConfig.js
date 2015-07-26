/* eslint no-sync: 0 */

'use strict';

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

module.exports = function(name) {
  const configPath = path.join(__dirname, '../settings', `${name}.yaml`);
  const configFile = fs.readFileSync(configPath, 'utf8');
  return yaml.safeLoad(configFile);
};
