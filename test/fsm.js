'use strict';

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

var expect = require('chai').expect;


describe("ai", function() {
  describe("fsm", function() {
    it('Should create FSM', function() {
      var fsm = require('../lib/ai/fsm')();
      expect(fsm).to.not.be.null;
    });
    it('Should create FSM and have empty state list', function() {
      var fsm = require('../lib/ai/fsm')();
      expect(fsm).to.not.be.null;
      expect(fsm.getCurrentState()).to.be.null;
    });
    it('Should push state', function() {
      var fsm = require('../lib/ai/fsm')();
      expect(fsm).to.not.be.null;
      expect(fsm.getCurrentState()).to.be.null;
      fsm.push(function(){});
      expect(fsm.getCurrentState()).to.not.be.null;
    });
    it('Should pop state', function() {
      var fsm = require('../lib/ai/fsm')();
      expect(fsm).to.not.be.null;
      expect(fsm.getCurrentState()).to.be.null;
      fsm.push(function(){
        return 'test state 1';
      });
      var popped = fsm.pop();
      expect(popped).to.not.be.null;
      expect(popped()).to.equal('test state 1');
      expect(fsm.getCurrentState()).to.be.null;
    });
    it('Should replace current state', function() {
      var fsm = require('../lib/ai/fsm')();
      fsm.push(function(){
        return 'test state 1';
      });
      fsm.replaceCurrentState(function(){
        return 'test state 2';
      });
      expect(fsm.getCurrentState()).to.not.be.null;
      expect(fsm.getCurrentState()()).to.equal('test state 2');
    });
    /*it('Should run update() on current state', function() {
      var fsm = require('../lib/ai/fsm')();
      fsm.push(function(){
        return 'test state 1';
      });
      fsm.replaceCurrentState(function(){
        return 'test state 2';
      });
      expect(fsm.getCurrentState()).to.not.be.null;
      expect(fsm.update({gameId: "game1"})).to.equal('test state 2');
    });*/
    
  });
});
