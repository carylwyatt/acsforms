var expect = require('chai').expect,
  { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><body><div>1</div></body></html>');
const {window} = jsdom;
const {document} = window;
global.window = window;
global.document = document;

const $ = global.jQuery = require('jquery');

//console.log(document.querySelector('div').textContent); //1

describe('helloWorld', function () {
  var helloWorld = require('./index.js').helloWorld;

  it('should return string hello world', function() {
    expect(helloWorld()).to.have.string('hello world');
  });
});

// how to test jquery when it isn't really functional programming? 
// there are *functions* buuuut it's just dom manipulation?
