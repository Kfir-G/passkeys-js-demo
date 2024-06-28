#! /bin/bash

npm init --yes 
npm install express --save
npm install nodemon --save-dev
npm install sequelize --save
npm install sequelize-cli --save
npx sequelize-cli init
npm install pg --save
npx sequelize-cli model:generate --name User --attributes email:string
npx sequelize-cli db:migarte
npm install ejs express-ejs-layouts --save
npx sequelize-cli model:generate --name PublicKeyCredentials --attributes public_key:string
npx sequelize-cli db:migrate
