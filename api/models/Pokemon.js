/**
* Pokemon.js
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
        numero:{
            type:"integer",
            required:true
        },
        tipo: {
          type: 'string',
          enum: ['electrico', 'fuego', 'hierba', 'agua', 'tierra']
        },
        entrenador: {
          model: 'Usuarios'
        }

  }
};
