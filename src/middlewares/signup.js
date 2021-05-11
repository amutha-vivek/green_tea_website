const User = require("../models/user");

const signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user.tokens) {
        throw new Error("Signup failed!");
    } 
    req.valid = true;
  } catch (e) {
    console.log(e);
  }
  next();
};

module.exports = signup;
