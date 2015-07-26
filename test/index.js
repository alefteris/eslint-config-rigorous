/* eslint no-var:0 */

'use strict';

var chai = require('chai');
var defaultConfig = require('../index');

var expect = chai.expect;

describe('The config', function() {
  it('for defaults should have a rules section', function() {
    expect(defaultConfig).to.have.property('rules');
  });
});
