const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));

app.get('/', async(req, res) => {
    res.render('pages/index', {
        communityPath: require('../config.json').simOptions.communityPath,
        packagePath: require('../config.json').simOptions.packagePath
    });
});

app.get('/config', async(req, res) => {
    res.render('pages/config', {
        communityPath: require('../config.json').simOptions.communityPath,
        packagePath: require('../config.json').simOptions.packagePath
    });
});

app.listen(require('../config.json').application.port, () => module.exports = app);