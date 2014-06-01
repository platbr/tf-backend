module.exports = function () {
    //Comum de todas as classes.
    return  {
        parseToSave: function (obj,validos,obtidos) {
            for (var prop in obtidos) {
                if (typeof obj[obtidos[prop]] != 'string') {
                    delete obj[obtidos[prop]];
                }
                if ((validos.indexOf(obtidos[prop]) < 0)) {
                    delete obj[obtidos[prop]];
                }
            }
            return obj;
        },
        hasRequired: function (requeridos,obtidos) {
            for (var prop in requeridos) {
                if ((obtidos.indexOf(requeridos[prop]) < 0)) {
                    return false;
                }
            }
            return true;
        }
    };
};
