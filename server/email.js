const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

//const app = express("../")

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();


//app.use(cors({ origin: "*" }));
//app.use(bodyParser.json());

/*app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});*/

/*
app.get("http://localhost:3000", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Wellcome to FunOfHeuristic <br><br>😃👻😃👻😃👻😃👻😃</h1>"
  );
}); */
/*
app.post('/sendmail', (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, info => {
    console.log(`The mail has beed send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

async function sendMail(user, callback) {
 
  let mailOptions = {
    from: '"Fun Of Heuristic"<valen.julasoft@gmail.com>', // sender address
    to: user.email, // list of receivers
    subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
    html: `<h1>Hi ${user.razonSocial}</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
} */

/*// main().catch(console.error);
module.exports = function(MyModel) {
    // send an email
    MyModel.sendEmail = function(cb) {
      MyModel.app.models.Email.send({
        to: 'foo@bar.com',
        from: 'you@gmail.com',
        subject: 'my subject',
        text: 'my text',
        html: 'my <em>html</em>'
      }, function(err, mail) {
        console.log('email sent!');
        cb(err);
      });
    }
  };
  */