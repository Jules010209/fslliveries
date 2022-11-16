const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    res.render('pages/index', { 
        // url: await api.get('pgif')
    });
});

app.listen(require('../config.json').application.port, () => module.exports = app);