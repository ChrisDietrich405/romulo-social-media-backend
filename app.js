const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

app.post("/login", (req, resp, next) => {
  resp.json({ test: "we are smart today" });
}); 

//backend receives front end's post request

module.exports = app;
