const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jaycee.cruickshank70@ethereal.email",
      pass: "z5CQBBHrg4T1CjpGCT",
    },
  });

  let info = await transporter.sendMail({
    from: '"Sumrender" <sammy@gmail.com>', // sender address
    to: "iam@gmail.com", // list of receivers
    subject: "Hello Sammy", // Subject line
    text: "Yo bro, How are you?", // plain text body
    html: "<b>nice work bro</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
