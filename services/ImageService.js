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

module.exports = ImageService;
