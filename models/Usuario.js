module.exports = function () {
    //Classe Usuario
    var Util = require('./utils/general');
    var util = new Util();
    var nome = '';
    var sobrenome = '';
    var sexo = '';
    var dn = '';
    var email = '';
    var senha = '';
    var cel = '';
    var cidade = '';
    var estado = '';
    var indicacao = '';
    var token = '';
    return  {
        parseToSave: function (obj) {
            var validos = ['nome', 'sobrenome', 'sexo', 'dn', 'email', 'senha', 'cel', 'cidade', 'estado', 'indicacao', 'token'];
            var obtidos = Object.getOwnPropertyNames(obj);
            return util.parseToSave(obj,validos,obtidos);
        },
        hasRequired: function (obj) {
            var requeridos = ['nome', 'sobrenome', 'sexo', 'dn', 'email', 'senha', 'cel', 'cidade', 'estado', 'token'];
            var obtidos = Object.getOwnPropertyNames(obj);
            return util.hasRequired(requeridos,obtidos);
        }
    };
};