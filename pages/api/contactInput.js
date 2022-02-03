const express = require("express");
const sendMessage = require("./sendSMS");
const router = express.Router();
const Contact = require("../models/Contact");
require("colors");

router.post("/", async (req, res) => {
  console.log("backend reached".red);
  const { name, email, message } = req.body;
  console.log(`Message: ${message}`.red);
  // sendMessage(message);
  sendMessage.sendMessage(message);
  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });
    console.log({ newContact });
    const addContact = await newContact.save();
    res.json(addContact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`Oh $**%. Post failed. ${error.message}`);
  }
});

module.exports = router;
