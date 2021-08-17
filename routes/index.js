var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/device', function (req, res, next) {
    const data = getJson(req, 'device.json')
    res.send(data);
});

router.post('/config', function (req, res, next) {
    const data = getJson(req, 'config.json');
    res.send(data);
});

router.post('/agent-info-upload', function (req, res, next) {
    const data = getJson(req, 'agentInfoUpload.json');
    res.send(data);
});

router.post('/put-log', function (req, res, next) {
    const data = getJson(req, 'putLog.json');
    res.send(data);
});

function getJson(req, jsonFile) {
    let path = 'defult';
    if (req.body.header.client_type) {
        path = req.body.header.client_type;
    }
    return require('../stub/' + path + '/' + jsonFile);
}


module.exports = router;
