const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '10.150.200.51',
  port: '3307',
  user: 'mikami',
  password: 'leelee1!',
  database: 'mikami'
});

connection.connect((err) => {
    if (err) {
      console.log('error connecting: ' + err.stack);
      return;
    }
    console.log('success');
    const sql = 'select * from TBL_TEST';
    connection.query(sql, function (err,result,fields) {
        if (err) throw err;
        console.log(result);
    })
});