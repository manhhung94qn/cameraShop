const users = require('./controllers/userController');
const socail = require('./controllers/socialController');

module.exports = (app) => {
    app.use('/api/user', users);
    app.use('/auth',socail);
}