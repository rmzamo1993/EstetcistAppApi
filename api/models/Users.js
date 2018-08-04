/**
 * Users.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  migrate: 'safe',
  dontUseObjectIds: true,
  attributes: { 
  id: { type: 'string', columnName: '_id' },
  name:{
    type:'string'
  },
  surname:{
    type:'string'
  },
  phone:{
    type:'string',
    unique: true,
  },
  email:{
    type:'string',
    unique: true,
  },
  numberPhoneVerified:{
    type:'string'
  },
  verifiedPhone:{
    type:'boolean'
  },
 lgpdAccepted:{
    type:'boolean'
  },
  lgpdAcceptedTime:{
    type:'string'
  },
  age:{
    type:'integer'
  },
  pwd:{
    type:'string'
  },
  tokenAccess:{
    type:'string'
  },
  registerDate:{
    type: 'string'
  },
  registerType:{
    type:'string'
  }
  }
};

