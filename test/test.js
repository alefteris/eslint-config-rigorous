/* eslint no-var:0 */

'use strict';

var chai = require('chai');
var config = require('../index');

var expect = chai.expect;

describe('The config', function() {
  it('should have a rules section', function() {
    expect(config).to.have.property('rules');
  });
});
