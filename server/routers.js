const users = require('./controllers/userController');

module.exports = (app) => {
    app.use('/api/user',users);
}