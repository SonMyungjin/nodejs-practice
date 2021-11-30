//모듈
var express = require('express');
var bodyParser = require('body-parser');
var app = express(); 
 
//코드를 uglify하지 않고 pretty하게
app.locals.pretty = true;

//템플릿 엔진
app.set('view engine', 'jade');
app.set('views', './views');

//정적 파일
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

//라우터
app.get('/form', function(req,res) {
    res.render('form');
})

app.get('/form_receiver', function(req,res) {
    var title = req.query.title;
    var description = req.query.description;
    res.send(title+','+description);
})

app.post('/form_receiver', function(req,res) {
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+','+description);
})

app.get('/topic/:id', function (req, res) {
    var topics = [
        'JavaScript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
    <a href="/topic/0">JavaScript</a><br>
    <a href="/topic/1">Nodejs</a><br>
    <a href="/topic/2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output); 
});

app.get('/topic/:id/:mode', function(req, res) {
    res.send(req.params.id+','+req.params.mode)
})

// app.get('/topic', function (req, res) {
//     var topics = [
//         'JavaScript is...',
//         'Nodejs is...',
//         'Express is...'
//     ];
//     var output = `
//     <a href="/topic?id=0">JavaScript</a><br>
//     <a href="/topic?id=1">Nodejs</a><br>
//     <a href="/topic?id=2">Express</a><br><br>
//     ${topics[req.query.id]}
//     `
//     res.send(output); //id 대신 name이라 쓰면 URL에 ?name= 으로
// });

// app.get('/template', function(req, res) {
//     res.render('temp', {time:Date(), _title:'Jade'});
// });

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
