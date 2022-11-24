const request = require('request');

var URL = 'https://zipcloud.ibsnet.co.jp/api/search';

var data = request.get({
    uri: URL,
    //headers: {'Content-type': 'application/json'},
    qs: {
        'zipcode':'7830060'
        // ?hoge=hugaの部分
    },
    json: true
}, function(err, req, data){
//    console.log(data);
    console.log(data.results[0]);
});
