var express = require('express')
var app = express()

var sqlQuery = require('./utils/sql')


app.get('/', (req, res) =>{
    res.send("This is QUIZZES server")
})


app.get("/api/question", async (req, res) =>{
    // console.log(req.query);
    res.append("Access-Control-Allow-Origin", "*")
    res.append("Access-Control-Allow-Content-Type", "*")

    let page = req.query.page?req.query.page:2

    let str = `select * from quizzes limit ${page*10}, 10`
    let result = await sqlQuery(str)
    // console.log(result);

    res.json(Array.from(result))
})


app.listen(8080, () =>{
    console.log('server start');
})