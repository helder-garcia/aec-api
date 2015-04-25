/**
 * Stubs for use in tests
 */
var crypto = require('crypto');
var stubs = {};

stubs.postStub = function postStub() {
  return {
    title:  crypto.randomBytes(10).toString('hex'),
    body:   crypto.randomBytes(90).toString('hex')
  }
}
stubs.loginStub = function loginStub() {
  return {
    email:  "aluno8@gmil.com",
    password:  "illneverforget" 
  }
}

module.exports = stubs;
