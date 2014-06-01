module.exports = function(app) {
    app.get('/usuario/:cel',app.controllers.usuario.getUser);
    app.post('/usuario',app.controllers.usuario.createUser);
};
