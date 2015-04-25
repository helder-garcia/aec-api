var request = require('supertest');
var assert = require('assert');
var async = require('async');
var stubs = require('../../stubs.js');


describe('Login', function() {

  // // use after all to create custom stub data
  // var user;
  // before(function(done) {
  //   User.create(uStub)
  //   .exec( function(err, u){
  //     if( err ) {
  //       console.log(err);
  //       return done(err);
  //     }

  //     user = u;
  //     user.password = password;
  //     done();
  //   });
  // });

  describe('Authenticated', function() {
    // use supertest.agent for store cookies ...
    // logged in agent
    var agent ;
    // after authenticated requests login the user
    // before(function(done) {
    //   agent = request.agent(sails.hooks.http.app);
    //   agent.post('/auth/login')
    //   .send({
    //     email: user.email,
    //     password: user.password
    //   })
    //   .end(function(err) {
    //     done(err);
    //   });
    // })

    describe('JSON Requests', function() {
       it('/relato should create one post with authenticated user as creator');
    });
  })

  describe('UnAuthenticated', function() {
    describe('JSON Requests', function() {
       it('/relato should create one post and return 201',function(done) {

        var loginStub = stubs.loginStub();
         request(sails.hooks.http.app)
          .post('/login')
          .send(loginStub)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end(function (err, res) {
            if(err) return done(err);

            assert.ok(res.body.email);
            assert.ok(res.body.password);
            assert.equal(res.body.email, loginStub.email);
            assert.equal(res.body.password, loginStub.password);

            done();
          });
       });
    });
  })

})
