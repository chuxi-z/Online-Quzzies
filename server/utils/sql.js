const sql = require('mysql')

const connection = {
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'zxcwoasdf135',
    database: 'Quizzes'
}

let con = sql.createConnection(connection)

con.connect(err =>{
    if(err){
        console.log(err);
        console.log('connect fail...');
    }
    else{
        console.log("connect success");
    }
})

function queryFn(sqlStr, arr){
    return new Promise((resolve, reject) =>{
        con.query(sqlStr, arr, (error, result) =>{
            if(error){
                reject(error)
            }
            else{
                resolve(result)
            }
        })
    })
}

module.exports = queryFn