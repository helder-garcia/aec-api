/**
 * Test File: Testing UserController
 * File location: test/controllers/UserController.spec.js
 */
var request = require('supertest');
var assert = require('assert');
var async = require('async');
//var stubs = require('../../stubs.js');
//var UserController = require('../../api/controllers/UserController'),  
//    sinon = require('sinon'),
//    assert = require('assert');

describe('The User Controller', function() {  
  describe('when we invoke the login action without parameters', function() {
    it('should return 500', function() {

      credentials = {
	body: {
    	email: 'webify@everenglish.com.br',
    	password: ''
	}
	};
         request(sails.hooks.http.app)
          .post('/user')
          .send(credentials)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            if(err) return done(err);
	/*
            assert.ok(res.body.title);
            assert.ok(res.body.body);
            assert.equal(res.body.title, postStub.title);
            assert.equal(res.body.body, postStub.body);
	*/
            assert.equal(res, 500);
	done();
    });
  });
});
