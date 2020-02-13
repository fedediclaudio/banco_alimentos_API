// Copyright IBM Corp. 2016. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.use(cors({origin:"*"}));
app.use(bodyParser.json());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }

    app.post('/sendmail', (req, res) => {
      console.log("request came");
      let user = req.body;
      sendMail(user, info => {
        console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
        res.send(info);
      });
    });

  });
};

async function sendMail(user, callback) {
 
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "bancodealimentos.laplata@gmail.com",
      pass: "nodemailer"
    }
  });

  let mailOptions = {
    from: '"BancoDeAlimentos"<bancodealimentos.laplata@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Solicitud de traslado", // Subject line
    html: `<h1>Hola ${user.name}</h1><br>
    <h4>Te hemos asignado a un traslado</h4> <br>
    <h6>Por favor revisa tu cuenta</h6>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}


// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
