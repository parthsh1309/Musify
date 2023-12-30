
const express = require("express");
const app = express();
const session = require('express-session');
require('dotenv').config({ path: './config/.env' });


// const cors = require("cors");
const cookieParser = require("cookie-parser");
const secretkey = process.env.secret_key;
app.use(
  session({
    secret: secretkey,
    resave: false,
    saveUninitialized: true,
  })
);

app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

// app.use(cors);
app.use(cookieParser());

const homeRoute = require('./src/routes/homeRoute');
const loginRoute = require('./src/routes/loginRoute');
const authRoute = require('./src/routes/authRoute');
const refreshTokenRoute = require('./src/routes/refreshTokens');


app.use('/',homeRoute);
app.use('/login',loginRoute);
app.use('/auth',authRoute);
app.use('/refresh_token',refreshTokenRoute);


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})