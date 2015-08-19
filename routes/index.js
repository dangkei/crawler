var express = require('express');
var router = express.Router();

var myUtil = require('../myUtil');
var cheerio = require('cheerio');

//var $ = require('jQuery');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var url = 'http://movie.douban.com/subject/1292063/';
  console.log(url);
  myUtil.get(url,function(content,status){
  	var $ = cheerio.load(content);

  	console.log('status : ' + status);
	var movie = {};
	//movie.name = $(content).find('span[property="v:itemreviewed"]').text();
	//movie.director = $(content).find('#info span:nth-child(1) a').text();
	movie.name = $('h1>span').text();
	movie.director = $('div#info').children('span').children().eq(1).text();
	console.log(movie);  	
  	res.send(content);
  });

});

module.exports = router;
