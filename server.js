const express = require("express");

const PORT = process.env.PORT || 3306;
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});
