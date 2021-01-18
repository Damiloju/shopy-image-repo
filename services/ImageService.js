const db = require("../database.js");

const ImageService = {};

ImageService.fetchAllImages = () => {
  // Fetch all images from db and wrap the funtion around the promise api becuase sqlite3 does not provide native support for it
  return new Promise((resolve, reject) => {
    const sql = "select * from images";

    const params = [];

    db.all(sql, params, (err, rows) => {
      if (err) {
        reject({ message: `Something went wrong ${err}`, code: 500, data: [] });
      }
      resolve({
        message: "success",
        code: 200,
        data: rows,
      });
    });
  });
};

ImageService.fetchImage = (id) => {
  const sql = `select * from images where id = ?`;
  const params = [id];
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) {
        reject({ message: `Something went wrong ${err}`, code: 500, data: [] });
      }
      resolve({
        message: "success",
        code: 200,
        data: row,
      });
    });
  });
};

ImageService.buyImage = async (id, quantity) => {
  const image = await ImageService.fetchImage(id);
  if (quantity > image.data.quantity) {
    throw new Error("That's more than we have at the moment");
  }

  quantity = image.data.quantity - quantity;
  const sql = `UPDATE images set 
           quantity = COALESCE(?,quantity)
           WHERE id = ?`;
  const params = [quantity, id];
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, row) => {
      if (err) {
        reject({ message: `Something went wrong ${err}`, code: 500, data: [] });
      }
      resolve({
        message: "success",
        code: 200,
        data: row,
      });
    });
  });
};

ImageService.sellImage = async (id, quantity, price) => {
  console.log(id, quantity, price);
  const sql = `UPDATE images set
           quantity = COALESCE(?,quantity),
           price = COALESCE(?,price)
           WHERE id = ?`;
  const params = [quantity, price, id];
  return new Promise((resolve, reject) => {
    db.run(sql, params, (err, row) => {
      if (err) {
        reject({ message: `Something went wrong ${err}`, code: 500, data: [] });
      }
      resolve({
        message: "success",
        code: 200,
        data: row,
      });
    });
  });
};

module.exports = ImageService;
