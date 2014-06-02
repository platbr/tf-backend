module.exports = function () {
    //Comum de todas as classes.
    return  {
        parseToUse: function (obj,validos) {
            var obtidos = Object.getOwnPropertyNames(obj);
            for (var prop in obtidos) {
                if ((validos.indexOf(obtidos[prop]) < 0)) {
                    delete obj[obtidos[prop]];
                }else if (typeof obj[obtidos[prop]] == 'function') {
                    delete obj[obtidos[prop]];
                }
            }
            return obj;
        },
        hasRequired: function (obj,requeridos) {
            var obtidos = Object.getOwnPropertyNames(obj);
            for (var prop in requeridos) {
                if ((obtidos.indexOf(requeridos[prop]) < 0)) {
                    return false;
                }
            }
            return true;
        }
    };
};