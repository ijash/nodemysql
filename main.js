var mysql = require('mysql');
var express = require ('express');

const app = express();
//express server
var portnum = '3000';
app.listen(portnum,()=>{
  console.log("server started at port "+ portnum);
});
//create mysql connecton
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "t",
  database: "CarRent"
});
// connect to db
db.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});
// execute query
//Listen on URL with param of request and response
app.get('/execquery',(req,res)=>{
  //temporary variable for query string
  let sql = "SELECT * FROM tb_karyawan";
  //execute query with parameter of query, error handling and result
  db.query(sql,(err,result)=>{
    if (err) throw err;
    console.log(result);
    // response of the request, the query result.
    res.send(result);
  })
})

//select single post
app.get('/execquery/:id',(req,res)=>{
  //use backticks to enable var in string
  let sql = `SELECT * FROM tb_karyawan WHERE id_karyawan = ${req.params.id}`;
  let query = db.query(sql,(err,results)=>{
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});
