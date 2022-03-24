//node_modules에 있는 express 관련 파일을 가져온다.
const { response } = require('express');
var express = require('express')

var fs = require('fs');
const { features } = require('process');

//express는 함수이므로, 반환값을 변수에 저장한다.
var app = express()

app.use('/image', express.static(__dirname + '/MapleStoryNewbie/image/'));

// request 와 response 라는 인자를 주어서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
//__dirname은 요청하고자 하는 파일의 경로를 단축시켜주는 절대경로 식별자이다.
app.get('/', function(req,res){
    res.sendFile(__dirname + "/MapleStoryNewbie/index.html")
})

//3000 포트로 서버 오픈
app.listen(3000, function(){console.log('Start! express server on port 3000');
});

//터미널에서 node server.js 명령어를 통해 node express 서버를 가동시킬 수 있다.
