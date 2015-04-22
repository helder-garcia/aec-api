/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'pk9gh_users',
  migrate: 'safe',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
        name: 'string',
        username: 'string',
        email: 'string',
        password: 'string',
	block: 'integer'
  }
};

