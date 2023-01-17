//Node.js를 웹 서버로 만들어주는 코드
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request, response){
    var url = request.url;
    if(request.url == '/'){
        url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname +url);//웹 브라우저가 요청한 파일의 경로를 콘솔에 출력하는 명령 추가
    response.end('egoing :' + url);
    //response.end()는 웹 서버가 웹 브라우저의 요청에 응답하는 명령
});
app.listen(3000);