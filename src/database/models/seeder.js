require("../dbConfig");
const User = require("./formModel");

const data = require("../seederdata");

const saveUser = async () => {
  try {
    const newUser = new User(data);
    const result = await newUser.save();
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};

saveUser();
