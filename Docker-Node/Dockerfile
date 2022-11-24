FROM node

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# ライブラリ
#RUN npm init && npm install --save dotenv yargs axios @azure/msal-node
#RUN npm install --save dotenv yargs axios qs @azure/msal-node @microsoft/microsoft-graph-client request && npm cache clean --force

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]