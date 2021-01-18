const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get("/", function (req, res, next) {
  const testFolder = "public/images/";
  const images = [];

  fs.readdirSync(testFolder).forEach((file) => {
    images.push(file);
  });

  res.render("index", { title: "Shopify Image Repo", images: images });
});

/* GET home page. */
router.get("/img1/buy", function (req, res, next) {
  res.render("buy", { title: "Shopify Image Repo" });
});

/* GET home page. */
router.get("/img1/sell", function (req, res, next) {
  res.render("sell", { title: "Shopify Image Repo" });
});

/* GET home page. */
router.get("/img1/manage", function (req, res, next) {
  res.render("manage", { title: "Shopify Image Repo" });
});

module.exports = router;
