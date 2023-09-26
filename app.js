const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const bodyParser = require("body-parser"); 
const accountSid = "ACff7f33e22f7e975d4a963e5bab2e937d";
const authToken = "9a32a90c6d9fdd14f6ed014676fc1e62";
const verifySid = "VAc13cec300047e05f89715ee0d2af6fa2";
const client = require("twilio")(accountSid, authToken); 

app.use(bodyParser.json());

// Initialize Server
const initializeServer = async () => {
  try {
    app.listen(3030, () => {
      console.log("Server running at http://localhost:3030");
    });
  } catch (error) {
    console.log(`Server Error: ${error.message}`);
    process.exit(1);
  }
};

initializeServer();

app.post("/send-otp", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: phoneNumber, channel: "sms" })
    .then((verification) => {
      console.log(verification.status);
      res.json({ message: "OTP sent successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to send OTP" });
    });
});

app.post("/verify-otp", (req, res) => {
  const phoneNumber = req.body.phoneNumber; 
  const otpCode = req.body.otpCode; 
  client.verify.v2
    .services(verifySid)
    .verificationChecks.create({ to: phoneNumber, code:  otpCode})
    .then((verification_check) => {
      console.log(verification_check.status);
      if (verification_check.status === "approved") {
        res.json({ message: "OTP verification successful" });
      } else {
        res.status(400).json({ message: "OTP verification failed" });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to verify OTP" });
    });
});
