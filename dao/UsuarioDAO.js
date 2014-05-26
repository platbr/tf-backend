module.exports = function (app) {
    var Usuario = require('../models/Usuario');
    var UsuarioDAO = require('../dao/UsuarioDAO');
    return  {
        getByCel: function (cel) {
            usuario = new Usuario();
            usuario.nome = 'Wagner';
            usuario.sobrenome = 'Caixeta';
            usuario.sexo = 'M';
            usuario.dn = '11/11/1983';
            usuario.email = 'wagner.caixeta@gmail.com';
            usuario.senha = 'senha123';
            usuario.cel = cel;
            usuario.cidade = 'Goiânia';
            usuario.estado = 'GO';
            usuario.indicacao = '06296246415';
            usuario.token = '0123456789';
            return usuario;
        },
        createUsuario: function (usuario) {
            console.log('Nome é' + usuario.nome);
        }
    };
};
