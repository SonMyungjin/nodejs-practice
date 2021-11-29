var express = require('express');
var app = express(); 
 
//코드를 uglify하지 않고 pretty하게
app.locals.pretty = true;

//템플릿 엔진
app.set('view engine', 'jade');
app.set('views', './views');

//정적 파일
app.use(express.static('public'));

//라우터
app.get('/template', function(req, res) {
    res.render('temp', {time:Date(), _title:'Jade'});
});

app.get('/', function(req, res) {
    res.send('Hello home page!!');
});

app.get('/dynamic', function(req,res) {
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }

    var time = Date();

    var output = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <title>Page Title</title>
    </head>
    <body>
        Hello, Dynamic
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);
})

app.get('/route', function(req, res) {
    res.send('Hello Router');
});

app.get('/login', function(req, res) {
    res.send('<h1>login please<h1>');
});

app.listen(3000, function() {
    console.log('Connected 3000 port!');
});
