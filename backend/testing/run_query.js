const {user,password,database}  = require('./config.js');
const { exec } = require('child_process');
const QUERY_PATH = './queries/dummyDataQueries.sql';
const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

const submit_query = ()=>{
    const comm = `mysql -u ${user} -p ${database} < ${QUERY_PATH} `;
    exec(comm, (error, stdout, stderr) => {
        if (error) {
          console.error(`mysql error: ${error}`);
          return;
        }
        console.log(`Piping Query File ${QUERY_PATH} into database: ${database}`)
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });

}
readline.question(`Would You Like To Submit Query Found In File ${QUERY_PATH}: y/n: `,(answer)=>{
    if(answer === 'y' || answer === '1')
        submit_query();
    else{
        console.log("Query Not Submitted")
    }
    readline.close();
})
// create a file with .sql extenstion, set QUERY_PATH to the path of your SQL file
// and the query will run. 




