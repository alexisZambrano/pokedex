/**
* Pokemon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // Many to One
    dueno: {
        model: 'Usuarios'
    },

    nombre: {
        type: 'string',
        required: true
    },

    fotoUrl: {
        type: "string",
        unique: true
    },
    fotoFd: {
        type: "string",
        unique: true
    },
    url: {
        type: "string",
        unique: true
    }
  }
};
