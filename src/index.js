require("./database/dbConfig");
const express = require("express");
const User = require("./database/models/formModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.get("/", async (request, response) => {
  console.log("Hi");
  try {
    const user = await User.find({}).sort({ firstName: "desc" });
    response.status(200).json({
      user
    });
  } catch (e) {
    console.log(e);
    response.status(500).send("Error while fetching!");
  }
});

app.post("/", async (request, response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      gender,
      age,
      notes,
      phoneNumber,
      profilePic
    } = request.body;

    const result = await new User({
      firstName,
      lastName,
      email,
      gender,
      age,
      notes,
      phoneNumber,
      profilePic
    });
    result.save();
    response.status(200).json({
      result
    });
  } catch (e) {
    console.error(e);
    response.status(500).send("Error while inserting");
  }
});

app.listen(process.env.PORT || 8080, () => {
  console.log("Application is up and running");
});
