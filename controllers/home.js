module.exports = function (app) {
    var Usuario = require('../models/Usuario');
    var UsuarioDAO = require('../dao/UsuarioDAO');
    return  {
        index: function (req, res) {
            uDAO = new UsuarioDAO();
            u = new Usuario();
            u = uDAO.getByCel('06284126415');
            uDAO.createUsuario(u);
            res.render('home/index',{title: u.nome });
        }
    };
};