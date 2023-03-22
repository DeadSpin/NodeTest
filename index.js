const express = require("express");
const app = express();
const errorHandler = require("./shared/errorHandler");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./shared/dbConfig");
require('./shared/errorHandler');

app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes");
app.use('/', routes);

app.use(errorHandler);

const port = process.env.NODE_ENV === 'local' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});