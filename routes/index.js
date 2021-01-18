const express = require("express");
const router = express.Router();
const ImageController = require("../controllers/ImageController");

/* GET home page. */
router.get("/", async (req, res, next) => {
  // fetch images record from the db
  images = await ImageController.getAllImages();
  res.render("index", { title: "Shopify Image Repo", images: images.data });
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
