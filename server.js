const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: ["http://192.168.0.105:8787", "http://localhost:8787"]
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Sunday school library application." });
});

require("./app/routes/book.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");

// production env
db.sequelize.sync();

//dev env
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });