const pool = require('../db/pool');

module.exports = app => {
    app.get('/api/moves', (req, res) => {
        res.send('good-O!');
    })
}