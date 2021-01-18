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

module.exports = ImageController;
