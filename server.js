const express = require("express");
const expressHandlebars = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
