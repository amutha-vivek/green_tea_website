const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const User = require("./models/user");
const userRouter = require("./routers/user");
const pagesRouter = require("./routers/pages");

const app = express();

//Setup path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");

//Setup handlebars engine and views directory

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(userRouter);
app.use(pagesRouter);

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
