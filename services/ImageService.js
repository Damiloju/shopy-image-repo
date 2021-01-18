const db = require("../database.js");

const ImageService = {};

ImageService.fetchAllImages = () => {
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
  db.all(sql, params, (err, rows) => {
    if (err) {
      return { message: `Something went wrong ${err}`, code: 500, data: [] };
    }
    return {
      message: "success",
      code: 200,
      data: rows,
    };
  });
};

module.exports = ImageService;
