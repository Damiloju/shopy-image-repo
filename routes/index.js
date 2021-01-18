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
router.get("/images/:id/buy", async (req, res, next) => {
  image = await ImageController.getImage(req.params.id);
  res.render("buy", { title: "Shopify Image Repo", image: image.data });
});

/* GET home page. */
router.get("/images/:id/sell", async (req, res, next) => {
  image = await ImageController.getImage(req.params.id);

  res.render("sell", { title: "Shopify Image Repo", image: image.data });
});

/* GET home page. */
router.get("/images/:id/manage", async (req, res, next) => {
  image = await ImageController.getImage(req.params.id);

  res.render("manage", { title: "Shopify Image Repo", image: image.data });
});

router.post("/images/:id/buy", async (req, res, next) => {
  images = await ImageController.buyImage(req.params.id, req.body.quantity);
  res.redirect("/");
});

module.exports = router;
