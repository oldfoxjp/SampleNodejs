// ごく軽微な地震や震源を特定出来ない情報の取り扱い。マグニチュードが負数となる

const getUser = async () => {
    const url = `https://api.p2pquake.net/v2/jma/quake?limit=100`;
    const response = await fetch(url, { method: "get"})
    const json = response.json();
    if (response.status == 200) {
      return Promise.resolve(json);
    } else {
      return Promise.reject(json.error);
    }
  };

getUser()
.then((data) => {
    console.log(data);
    const getEQlist = data.map(function( value, index, array ) {
      //if (value['earthquake']['hypocenter']['magnitude'] > 0) {
        return { 'cr':value['created_at'], 
          'magnitude':value['earthquake']['hypocenter']['magnitude'], 
          'hypocenter':value['earthquake']['hypocenter']['name']
        };
      //}
    });

    // CSV
    const createCsvWriter = require('csv-writer').createObjectCsvWriter;
    const csvWriter = createCsvWriter({
    path: 'data.csv',       // 保存する先のパス(すでにファイルがある場合は上書き保存)
    header: ['cr', 'magnitude', 'hypocenter']  // 出力する項目(ここにない項目はスキップされる)
    });

    // 書き込み
    csvWriter.writeRecords(getEQlist)
    .then(() => {
        console.log('done');
    });

    //console.log(getEQlist);
})
.catch((err) => {
    console.log(err);
});