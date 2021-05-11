const express = require("express");

const router = new express.Router();

router.get("/", async (req, res) => {
  res.render("index", { noUser: "Signin User", userName: "" });
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/signin", async (req, res) => {
  res.render("signin");
});

module.exports = router;
