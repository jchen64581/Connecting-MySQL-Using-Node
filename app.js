
var faker = require('faker');

var mysql = require('mysql');
//Establishing connections to an existing database
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',     // root username
  password: 'password',
  database: 'join_us',  //  name of  db
  port: '3306'
});

//connect
connection.connect((err)=> {
    if(err){
        throw err
    } else {
        console.log('connected')
    }
})

//querying data
var q = 'SELECT * FROM users';
connection.query(q, function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});

var q1 = 'SELECT COUNT(*) FROM users';
connection.query(q1, function (error, results, fields) {
  if (error) throw error;
  console.log(results)
});

// //inserting data
// var q2 = 'INSERT INTO users (email) VALUES ("wyatt_the_dog@gmail.com")'
// connection.query(q2, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results)
//   });

//inserting randomly generated data from faker
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
var person = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(person, [data], function(err, result) {
  console.log(err);
  console.log(result);
});
 
connection.end();



