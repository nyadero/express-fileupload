require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();
const db = require("./models");

app.use(cors());

// static paths
 app.use("/images", express.static("images"));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());

// routes
const routes = require("./api/profileRoutes");
app.use("/profiles", routes);


db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`App listening to port: http://localhost:${PORT}`));
});