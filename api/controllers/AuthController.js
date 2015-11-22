/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	logIn: function (req, res) {
			var params = req.allParams();
			sails.log.info('Usuario: ',params.nombre,' Password: ',params.password);
			if (params.nombre === undefined || params.password === undefined) {
					sails.log.warn('Envio incorrecto de parametros.');
					return res.badRequest('Envio incorrecto de parametros.');
			} else {
					Usuarios.findOne()
							.where({
									nombre: params.nombre
							})
							.exec(function (err, results) {
									if (err) return res.negotiate();

									if (results) {
											sails.log.info('Se encontro el usuario: ',results.nombre);
											if(params.password==results.password){
													sails.log.info('Login correcto');
													req.session.user = results;
													req.session.authenticated = true;
													return res.redirect('usuario');
											}
											else{
													sails.log.warn('Datos invalidos');
													return res.badRequest('Envio incorrecto de parametros.');
											}

									}
									else {
											sails.log.warn('No se encontro ese usuario');
											return res.badRequest('No se encontro ese usuario');
									}

							});
			}
	}
};
