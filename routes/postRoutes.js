const pool = require('../db/pool');

module.exports = app => {
    app.post('/api/moves', (req, res) => {
        console.log("postmoves");
    })
}