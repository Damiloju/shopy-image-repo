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
  res.render("feedback", {
    title: "Shopify Image Repo",
    message: "Thanks for buying, purchase successful",
  });
});

router.post("/images/:id/sell", async (req, res, next) => {
  images = await ImageController.sellImage(
    req.params.id,
    req.body.quantity,
    req.body.price
  );
  res.render("feedback", {
    title: "Shopify Image Repo",
    message: "Image has been put up for sale",
  });
});

router.post("/images/:id/manage", async (req, res, next) => {
  images = await ImageController.manageImage(
    req.params.id,
    req.body.quantity,
    req.body.price,
    Number(req.body.action)
  );
  if (Number(req.body.action) === 2) {
    res.render("feedback", {
      title: "Shopify Image Repo",
      message: "Image deleted from inventory successfully",
    });

    res.redirect(
      "<a href='home'>Homw</a> <p>Image deleted from inventory successfully</p>"
    );
  } else if (Number(req.body.action) === 1) {
    res.render("feedback", {
      title: "Shopify Image Repo",
      message: "Inventory updated successfully",
    });
  }
});

module.exports = router;
