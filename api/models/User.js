/**
* User.js
*
* @description :: Users collection
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

