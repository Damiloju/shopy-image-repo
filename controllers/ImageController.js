const imageService = require("../services/ImageService");
const ImageController = {};

ImageController.getAllImages = async () => {
  try {
    const res = await imageService.fetchAllImages();
    return res;
  } catch (error) {
    console.log("Something went wrong", error);
    return error;
  }
};

ImageController.getImage = async (id) => {
  try {
    const res = await imageService.fetchImage(id);
    return res;
  } catch (error) {
    console.log("Something went wrong", error);
    return error;
  }
};

ImageController.buyImage = async (id, quantity) => {
  try {
    const res = await imageService.buyImage(id, quantity);
    return res;
  } catch (error) {
    console.log("Something went wrong", error);
    return error;
  }
};

ImageController.sellImage = async (id, quantity, price) => {
  //convert price to pennies
  price = price * 1000;
  try {
    const res = await imageService.sellImage(id, quantity, price);
    return res;
  } catch (error) {
    console.log("Something went wrong", error);
    return error;
  }
};

module.exports = ImageController;
