module.exports = function () {
    //Classe UsuarioDAO
    var Usuario = require('../models/Usuario');
    var connFactory = require('./util/ConnectionFactory');
    var conexao = new connFactory;

    return  {
        getByCel: function (cel, callback) {
            conexao.readNodesWithLabelsAndProperties(['Usuario'], {cel: cel}, function (err, readNode) {
                if (err) {
                    err = {status: 'erro', info: 'Falha ao consultar o banco de dados!', tipo: 'bd'};
                    console.error(err);
                    callback(err);
                } else {
                    if (readNode[0]) {
                        callback(err, readNode[0]);
                    } else{
                        callback(err, null);
                    }
                }
            });
        },
        createUsuario: function (usuario, callback) {
            //TODO: Implementar mecanismo de geração de TOKEN
            usuario.token = 'TOKEN0123456789';
            conexao.insertNode(usuario, ['Usuario'], function (err, node) {
                if (err) {
                    err = {status: 'erro', info: 'Falha ao criar usuário!', cel: usuario.cel};
                    console.log(err);
                    callback(err);
                } else {
                    console.log({status: 'sucesso', info: 'Usuário criado!', cel: node.cel, token:  node.token, node: node._id});
                    callback(err, node.token);
                }
            });
        }
    };
};
