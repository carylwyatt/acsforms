var expect = require('chai').expect,
  { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body><div>1</div></body></html>');
const {window} = jsdom;
const {document} = window;
global.window = window;
global.document = document;

const $ = global.jQuery = require('jquery');

describe('helloWorld', function () {
  var helloWorld = require('./index.js').helloWorld;

  it('should return string hello world', function() {
    expect(helloWorld()).to.have.string('hello world');
  });
});
