const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

const shopRoutes = require("./routes/shop");

const mongoConnect = require("./database/database").mongoConnect;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use(shopRoutes);

mongoConnect(() => {
  app.listen(3000);
});
