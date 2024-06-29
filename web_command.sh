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
npm install passport --save
npm install passport-fido2-webauthn --save
npm install express-session --save
npm install connect-session-sequelize --save
npm install multer --save
npm install cookie-parser --save
