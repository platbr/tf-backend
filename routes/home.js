module.exports = function(app) {
    app.get('/home',app.controllers.home.index);
};