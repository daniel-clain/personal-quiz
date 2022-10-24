import express from 'express'
import fs from 'fs';
import https from 'https';
const privateKey  = fs.readFileSync(`${__dirname}/sslcert/server.key`, 'utf8');
const certificate = fs.readFileSync(`${__dirname}/sslcert/server.cert`, 'utf8');
const credentials = {key: privateKey, cert: certificate};

const app = express();
var httpsServer = https.createServer(credentials, app);


app.use(express.static('dist'))

app.get('/favicon.ico', (req, res) => {
  res.sendFile(`${__dirname}/favicon.ico`)
})
httpsServer.listen(2222, () => console.log('Personal Quiz App is being on port 2222'));
