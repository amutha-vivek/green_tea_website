const express = require("express");
const User = require("../models/user");
const signup = require("../middlewares/signup");
const auth = require("")
const axios = require("axios");

const router = new express.Router();

router.post("/signup", async (req, res, next) => {
  console.log(req.body);
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (!user.password === req.body.password) {
      throw Error;
    } else {
      res.render("index", {
        noUser: "",
        firstName: "Welcome, " + req.body.firstName + "!",
      });
    }
  } else {
    const newUser = new User(req.body);
    try {
      await newUser.save();
      // res.status(201).send(user);
      const token = await newUser.generateAuthToken();
      res.render("index", {
        noUser: "",
        firstName: "Welcome, " + req.body.firstName + "!",
      });
    } catch (e) {
      //   res.status(400).send(e);
      console.log(e);
    }
  }
});

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.render("index", {
      noUser: "",
      firstName: "Welcome, " + user.firstName + "!",
    });
  } catch (e) {
    console.log(e);
  }
});

//Change email, password and other details
//TODO needs editing
router.patch("/users/me", auth, async (req, res) => {
  const validOpertions = ["name", "age", "email", "password"];
  const updates = Object.keys(req.body);
  const isValid = updates.every(update => validOpertions.includes(update));
  if (!isValid) {
    return res.status(400).send({ error: "Invalid updates" });
  }
  try {
    // findByIDAndUpdate method bypasses mongoose and directly interacts with the database.
    // So here a traditional way is used
    const user = req.user;
    updates.forEach(update => (user[update] = req.body[update]));
    await user.save();

    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true
    // });
    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});
module.exports = router;
