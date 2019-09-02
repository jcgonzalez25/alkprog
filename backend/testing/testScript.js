const {user,password,database}  = require('./config.js');
const { exec } = require('child_process');
const QUERY_PATH = './queries/dummyDataQueries.sql';

// create a file with .sql extenstion, set QUERY_PATH to the path of your SQL file
// and the query will run. 
const comm = `mysql -u ${user} -p ${database} < ${QUERY_PATH} `;



exec(comm, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });