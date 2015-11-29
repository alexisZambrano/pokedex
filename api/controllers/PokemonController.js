/**
 * PokemonController
 *
 * @description :: Server-side logic for managing Pokemons
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	guardarPokemon: function (req, res) {
			var params = req.allParams();

			sails.log.info('Nombre: ', params.nombre, ' FotoPokemon: ', params.fotoPokemon, ' Usuario:', req.session.user);

			if (params.nombre === undefined) {
					sails.log.warn('Envio incorrecto de parametros.');
					return res.badRequest('Envio incorrecto de parametros.');

			} else {
					var deleteFd = '/home/fedora/Documents/DeberPokemon/Pokedex/assets/images/pokemons';
					sails.log.info('FotoPokemon: ', params.fotoPokemon);

					req.file('fotoPokemon').upload({
							// don't allow the total upload size to exceed ~10MB
							dirname: '../../assets/images/pokemons',
							maxBytes: 10000000
					}, function whenDone(err, uploadedFiles) {
							if (err) {
									return res.negotiate(err);
							}

							// If no files were uploaded, respond with an error.
							if (uploadedFiles.length === 0) {
									return res.badRequest('No file was uploaded');
							}

							console.log(uploadedFiles[0]);
							var urlImagen = uploadedFiles[0].fd.replace(deleteFd, "");

							// Save the "fd" and the url where the avatar for a user can be accessed
							// Generate a unique URL where the avatar can be downloaded.
							var fotoUrl = require('util').format('%s/pokemon/%s/%s', sails.getBaseUrl(), req.session.user.id, params.nombre);
							// Grab the first file and use it's `fd` (file descriptor)
							var fotoUrlFd = uploadedFiles[0].fd;
							var url = urlImagen;

							sails.log.info("urlImagen ", urlImagen);

							Pokemon.create({
											nombre: params.nombre,
											dueno: req.session.user.id,
											fotoUrl: fotoUrl,
											fotoUrlFd: fotoUrlFd,
											url: urlImagen
									})
									.exec(function (err, createdPokemon) {
											if (err) {
													return res.negotiate(err);
											}
											sails.log.info('Pokemon creado: ', createdPokemon);
											// Response code 200
											return res.ok('Satisfactorio :)', 'pokemon');
									});
					});
			}
	}
};
