const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

const shopRoutes = require("./routes/shop");

const mongoose = require("mongoose");

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(compression());

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use(shopRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
