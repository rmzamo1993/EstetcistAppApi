module.exports = {
  friendlyName: 'Guid Generator',


  description: '',


  extendedDescription: '',


  inputs: {

  },


  exits: {
  },


  fn: async function (inputs, exits) {

    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return exits.success(s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4());
  }

};

