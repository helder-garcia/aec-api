/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
module.exports = {
    login:function(req, res){
        if(req.body === undefined || req.body.password === undefined || req.body.email === undefined) res.send(500);
        User.findOne(req.body.email).exec(function(err, user) {
            if (err) return res.negotiate(err);
            if (!user) {
                return res.send({ message: 'Wrong email and/or password' },401);
            }
              //user.comparePassword(req.body.password, function(err, isMatch) {
              //  if(err){
              //    sails.log.info(err);
              //    res.send(500);
              //  }
              //  if (!isMatch) {
              //    return res.send({ message: 'Wrong email and/or password' },401);
              //  }
                user.toObject();
              //  delete user.password;
                res.send({ id: 200 });
             // });


        });
    }
};

