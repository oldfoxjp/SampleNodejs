const msal = require("@azure/msal-node");
/*
const msalConfig = {
  auth: {
    clientId: config.get("microsoft.clientId"),
    clientSecret: config.get("microsoft.clientSecret"),
    authority: `https://login.microsoftonline.com/${config.get(
      "microsoft.tenantId"
    )}`,
  },
};
*/
const msalConfig = {
    auth: {
      clientId: 'be9de107-2492-47bf-8b0b-cefd49020e60',
      clientSecret: 'f7878d83-0409-4c83-a7f4-977b5ac8f30d',
      authority: `https://login.microsoftonline.com/30944257-df71-405d-87e3-39f988e5148e`,
    },
  };

const cca = new msal.ConfidentialClientApplication(msalConfig);

const authResponse = await cca.acquireTokenByClientCredential(tokenRequest);

console.log("Got an auth token! ", authResponse.accessToken);

//Given the token,you can now set it to the header of any Axios calls made to Microsoft Graph API
const authHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};


/*
const emailBody = {
    subject: "Sample Email (Test)",
    importance: "Low",
    body: {
      contentType: "HTML",
      content: `Hello!`,
    },
    toRecipients: [
      {
        emailAddress: {
          address: `${recipeintEmail}`,
        },
      },
    ],
  };
  const draftEmailURL = `https://graph.microsoft.com/v1.0/users/${userId}/messages`;
  const response = await Axios.post(
    draftEmailURL,
    emailBody,
    authHeader(authResponse.accessToken)
  );
  
  const emailId = response.data.id;
  const sendEmailURL = `https://graph.microsoft.com/v1.0/users/${userId}/messages/${emailId}/send`;
  const response = await Axios.post(sendEmailURL, {}, authHeader(authResponse.accessToken));
*/