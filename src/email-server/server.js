const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;
// console.log(process.env.EMAIL);
// console.log(process.env.PASSWORD);
// console.log(process.env);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  authMethod: "PLAIN",
});

const generateMailOptions = (formData) => ({
  from: `${formData.email}`,
  to: process.env.EMAIL,
  subject: `Contact Form Submission from ${formData.name}`,
  text: `
    Name: ${formData.name}
    Organization Name: ${formData.organizationName}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Address: ${formData.address}
    Solution: ${formData.solution}
    Message: ${formData.message}
    Country: ${formData.country}
    State: ${formData.state}
    City: ${formData.city}
  `,
});

app.post("/submitform", (req, res) => {
  const formData = req.body;

  transporter.sendMail(generateMailOptions(formData), (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ success: false, error: "Failed to send email." });
    } else {
      console.log("Email sent:", info.response);
      res.send({ success: true, message: "Email sent successfully!" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
