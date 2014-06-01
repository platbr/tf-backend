module.exports = function () {
    var Usuario = require('../models/Usuario');
    var UsuarioDAO = require('../dao/UsuarioDAO');
    var u = new Usuario();
    return  {
        getUser: function (req, res, callback) {
            var usuarioDAO = new UsuarioDAO();
            usuarioDAO.getByCel(req.param('cel'), function (err, usuario) {
                if (err) {
                    callback(err);
                } else {
                    if (usuario) {
                        console.log('Usuario consultado: ' + usuario.cel);
                        res.send(u.parseToUse(usuario));
                    } else {
                        console.log('Usuario consultado não existe: ' + req.param('cel'));
                        res.send({status: 'alerta', info: 'Usuario não existe', cel: req.param('cel'), tipo: 'regas'});
                    }
                }
            });
        },
        createUser: function (req, res, callback) {
            var usuarioDAO = new UsuarioDAO();
            var usuario = req.body;
            if (u.hasRequired(u.parseToUse(usuario))) {
                usuarioDAO.getByCel(req.param('cel'), function (err, usuarioRead) {
                    if (err) {
                        callback(err);
                    } else {
                        if (usuarioRead) {
                            res.send({status: 'erro', info: 'Celular já existe!', cel: req.body.cel, tipo: 'regas'});
                        } else {
                            usuarioDAO.createUsuario(usuario, function (err, token) {
                                if (err) {
                                    callback(err);
                                } else {
                                    res.send({status: 'sucesso', info: 'Usuário criado!', token: token});
                                }
                            });
                        }
                    }
                });
            }
        }
    };
};