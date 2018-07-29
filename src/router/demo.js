var path = require('path');
var fs = require('fs');
var JSXToJson = require('jsx-to-json');
var express = require('express');
var router = express.Router();

const ReousrcePath = path.join(process.cwd(), '/resource');

router.get('/demo/:demoId', function(req, res, next) {
    var jsx = fs.readFileSync(path.join(ReousrcePath, `/demo_${req.params.demoId}.jsx`), {encoding: 'utf-8'});
    
    console.log('jsx', jsx);

    var json = JSXToJson.jsxToJson(jsx);
    
    console.log('json', json);

    res.json(json);
});

module.exports = router;
