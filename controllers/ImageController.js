const imageService = require("../services/ImageService");
const ImageController = {};

ImageController.getAllImages = async () => {
  const res = await imageService.fetchAllImages();
  console.log(res);
  return res;
};

ImageController.getImage = (id) => {
  const res = imageService.fetchImage(id);
  return res;
};

module.exports = ImageController;
