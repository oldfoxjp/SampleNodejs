// トークン取得のサンプル
// クライアントアプリケーション


// Make sure you replace these values from the copied values of you app
const APP_ID = 'be9de107-2492-47bf-8b0b-cefd49020e60';
const APP_SECERET = 'R4V8Q~lTFsg3JCmhO4NW4cLYHpIJ0.JB7gCxlb85';
const TOKEN_ENDPOINT ='https://login.microsoftonline.com/30944257-df71-405d-87e3-39f988e5148e/oauth2/v2.0/token';
const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';

const axios = require('axios');
const qs = require('qs');

const postData = {
  client_id: APP_ID,
  scope: MS_GRAPH_SCOPE,
  client_secret: APP_SECERET,
  grant_type: 'client_credentials'
};

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let token = '';


function getUser (accessToken) {
    const options = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };
    url = 'https://graph.microsoft.com' + '/v1.0/users';

    axios.get (url, qs.stringify(options))
    .then(response => {
        console.log(response);
      })
    .catch(error => {
      console.log(error);
    });

}

axios.post(TOKEN_ENDPOINT, qs.stringify(postData))
  .then(response => {
    console.log(response.data.access_token);
    getUser (response.data.access_token);
  })
  .catch(error => {
    console.log(error);
  });


console.log('end');