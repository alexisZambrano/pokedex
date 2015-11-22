  /**
  * Usuarios.js
  *
  * @description :: TODO: You might write a short summary of how this model works and what it represents here.
  * @docs        :: http://sailsjs.org/#!documentation/models
  */

  module.exports = {

    attributes: {
      nombre: {
              type: "string",
              required: true
          },
          password:{
              type:"string",
              defaultsTo:"123456"
          },
          usuario:{
              type:"string",
              unique:true
          },
          avatar:{
              type:"string",
              unique:true
          },
          pokemones: {
            collection: 'Pokemon',
            via: 'entrenador'
          }
    }
  };
