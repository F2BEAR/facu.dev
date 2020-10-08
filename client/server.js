const express = require("express");
const path = require("path");
const fs = require("fs");
const https = require("https");
require('dotenv').config()

const privateKey = fs.readFileSync("sslcert/privkey.pem", "utf8");
const certificate = fs.readFileSync("sslcert/cert.pem", "utf8");
const credentials = {key: privateKey, cert: certificate};

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const httpsServer = https.createServer(credentials, app);

const port = process.env.PORT;

httpsServer.listen(port, () => {
    console.log(`Express escuchando en el puerto ${port}`);
})
