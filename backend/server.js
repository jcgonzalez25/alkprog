const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mysql = require("mysql");
// helps extract data from client
const bodyParser = require("body-parser");
// cors is not best to be used on production; will need to do something different on prod
const cors = require("cors");

const {
  user,
  password,
  database
} = require("./testing/config.js");

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
//change config info
const con = mysql.createConnection({
  host: "localhost",
  user,
  password,
  database
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

con.connect(err => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

app.get("/events", function(req, res) {
  var sql = "SELECT * FROM testevent";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/gettherapists", function(req, res) {
  var sql =
    "SELECT member_full_name FROM members WHERE active = 1 AND role = 'therapist' ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.get("/getclients", function(req, res) {
  var sql = "SELECT client_full_name FROM clients ";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});

app.post("/putData2", function(req, res) {
  var sql =
    "INSERT INTO testevent (title, bill_type, client_type, client, therapist, location, category, start, end ) VALUES ('" +
    req.body.newClient +
    "','" +
    req.body.newBillType +
    "','" +
    req.body.newClientType +
    "','" +
    req.body.newClient +
    "','" +
    req.body.newTherapist +
    "','" +
    req.body.newLocation +
    "','" +
    req.body.newCategory +
    "','" +
    req.body.selectedDate +
    "','" +
    req.body.endSelectedDate +
    "')";
  con.query(sql, function(err, rows) {
    if (err) {
      res.json({ Error: true, Message: "Error Execute Sql", err });
    } else {
      // res.json({ "Error": false, "Message": "Success", "Visitors": rows });
      res.json(rows);
    }
  });
});
