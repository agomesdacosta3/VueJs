const express = require("express");
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'toto'
})


const app = express();


app.get("/" , (req, rep) => {


connection.connect()

connection.query('SELECT * FROM demo', (err, rows, fields) => {
  if (err) throw err

  console.log(fields , rows)
rep.json({texte : rows})
})

connection.end()

  
})

app.listen(2022, function(){
  console.log("ecpress start")
})