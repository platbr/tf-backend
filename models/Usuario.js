module.exports = function () {
    //Classe Usuario
    var Util = require('./utils/general');
    var util = new Util();
    var nome;
    var sobrenome;
    var sexo;
    var dn;
    var email;
    var senha;
    var cel;
    var cidade;
    var estado;
    var indicacao;
    var auth; //Deve ser um, ira armazenar a autenticacao de cada dispositivo.
    return  {
        parseToUse: function (obj) {
            var validos = ['nome', 'sobrenome', 'sexo', 'dn', 'email', 'senha', 'cel', 'cidade', 'estado', 'indicacao', 'auth', 'token'];
            return util.parseToUse(obj,validos);
        },
        hasRequired: function (obj) {
            var requeridos = ['nome', 'sobrenome', 'sexo', 'dn', 'email', 'senha', 'cel', 'cidade', 'estado',];
            return util.hasRequired(obj,requeridos);
        }
    };
};