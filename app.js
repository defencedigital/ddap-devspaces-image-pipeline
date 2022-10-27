const express = require('express')
const app = express()
app.get('/', function(request,result){
    result.send('Hello World. D2S end to end test!! 27 Oct 2022')
})
app.listen(3333,"0.0.0.0",function(){
    console.log('hello world app is listening on port 3333. D2S end to end test 27 Oct 2022')
})
