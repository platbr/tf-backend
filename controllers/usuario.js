module.exports = function () {
    var Usuario = require('../models/Usuario');
    var UsuarioDAO = require('../dao/UsuarioDAO');
    return  {
        pegar: function (req, res, callback) {
            usuarioDAO = new UsuarioDAO();
            usuario = new Usuario();
            usuarioDAO.getByCel(req.param('cel'), function (err, usuario) {
                if (err) {
                    callback(err);
                } else {
                    if (usuario) {
                        console.log('Usuario consultado: ' + usuario.cel);
                        res.send(usuario);
                    } else {
                        console.log('Usuario consultado não existe: ' + req.param('cel'));
                        res.send({status: 'alerta', info: 'Usuario não existe', cel: req.param('cel'), tipo: 'regas'});
                    }
                }
            });
        },
        criar: function (req, res, callback) {
            if (req.body.nome && req.body.sobrenome && req.body.sexo && req.body.dn &&
                req.body.email && req.body.senha && req.body.cel && req.body.cidade
                && req.body.estado) {
                usuarioDAO = new UsuarioDAO();
                var usuario = {
                    nome: req.body.nome,
                    sobrenome: req.body.sobrenome,
                    sexo: req.body.sexo,
                    dn: req.body.dn,
                    email: req.body.email,
                    senha: req.body.senha,
                    cel: req.body.cel,
                    cidade: req.body.cidade,
                    estado: req.body.estado,
                    indicacao: req.body.indicacao,
                    token: req.body.token
                };
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