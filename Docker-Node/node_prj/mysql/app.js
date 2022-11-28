const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.100.241',
  user: 'miura_m',
  password: 'leelee1!',
  database: 'miura_m'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
    const sql = 'select * from jobs';
    connection.query(sql, function (err,result,fields) {
        if (err) throw err;
        console.log(result);
    })
});