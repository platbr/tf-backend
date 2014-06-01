module.exports = function(app) {
    app.get('/usuario/:cel',app.controllers.usuario.pegar);
    app.post('/usuario',app.controllers.usuario.criar);
};
