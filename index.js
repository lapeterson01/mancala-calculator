require('dotenv').config();
const express = require('express');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

require('./routes/getRoutes')(app);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('server is running on port 5000')
});