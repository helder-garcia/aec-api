/**
 * Test File: Testing StudentController
 * File location: test/controllers/StudentController.spec.js
 */
var StudentController = require('../../api/controllers/StudentController'),  
    sinon = require('sinon'),
    assert = require('assert');

describe('The Student Controller', function() {  
/**
 describe('when we invoke the find action', function() {
    it ('should not be empty', function(done) {
      StudentController.find().exec(function(err, student) {
        student.length.should.not.be.eql(1);
        done();
      });
    });
  });
*/
  describe('when we invoke the index action', function() {
    it('should return hello world message', function() {

      // Mocking res.send() method by using a sinon spy
      var send = sinon.spy();

      // Executes controller action
      StudentController.index(null, {
        'send': send
      });

      // Asserts send() method was called and that it was called
      // with the correct arguments: 'Hello World'
      assert(send.called);
      assert(send.calledWith('Hello World'));
    });
  });
});
