// app/models/article.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('Article', ArticleSchema);
