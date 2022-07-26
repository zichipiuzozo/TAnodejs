// get the client
import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejsbasic"
});

// simple query
// connection.query("SELECT * FROM `user`", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   let rows = results.map(row => {
//     return row.id;
//   });
//   console.log(rows);
//   // fields contains extra meta data about results, if available
// });

// with placeholder
connection.query(
  "SELECT * FROM `table` WHERE `name` = ? AND `age` > ?",
  ["Page", 45],
  function (err, results) {
    console.log(results);
  }
);

export default connection;
