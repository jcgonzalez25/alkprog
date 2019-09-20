# Therapy Management System
## Usage:
* Run `npm start` initiates a client that serves react-big-calendar
* Run `npm run serve` initiates server
* If mysql is running use run_query that initiates a table to your mysql instance.   
```
/*make sure config.js is setup to perform query with mysql info*/
>npm run run_query
```
## Features
1. Reads from mysql database from a table called events
2. Renders Calander via [React-big-calander](https://github.com/intljusticemission/react-big-calendar)
3. Writes to mysql via axios requests

## Mysql 
* Event tables are located in `backend/testing/queries/tables.sql`
    * event tables are the tables to which calender reads from 
* Use `npm run run_query` to perform queries to mysql
    * Must have exported object from a config.js file that has password username and database
```
module.exports = {
    user:"user",
    password:"password",
    database:"db"
}
```
* There other queries in `backend/testing/queries/`

