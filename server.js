console.log("Hello World!!");

//levantamos el server
const express = require("express");
const app = express();
require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser())
