const imageService = require("../services/ImageService");
const ImageController = {};

ImageController.getAllImages = async () => {
  try {
    const res = await imageService.fetchAllImages();
    return res;
  } catch (error) {
    console.log("Something went wrong");
  }
};

ImageController.getImage = (id) => {
  const res = imageService.fetchImage(id);
  return res;
};

module.exports = ImageController;
