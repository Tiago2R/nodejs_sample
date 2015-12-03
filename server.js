// server.js
var port = process.env.PORT || 8080;

// load dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extend:true}));
app.use(bodyParser.json());

// setup db connection
mongoose.set('debug', true);
mongoose.connect('mongodb://user:test@ds063124.mongolab.com:63124/mongo_test');
mongoose.connection.on('error', function(err){console.log(err);});

// load models
var Article = require('./app/models/article');

// router
var router = express.Router();
router.get('/', function(req, res) {
    res.json({message:'API is running!'});
});

router.route('/articles')
    .get(function(req, res) {
        Article.find(function(err, articles) {
            if(err) {
                res.send(err);
            }

            res.json(articles);
        });
    });

// launch application
app.use('/api', router);
app.listen(port);

console.log("Hello World!");