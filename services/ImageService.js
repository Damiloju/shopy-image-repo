const db = require("../database.js");

const ImageService = {};

ImageService.fetchAllImages = function () {
  const sql = "select * from images";

  const params = [];

  const data = [];

  try {
    db.all(sql, params, (err, rows) => {
      if (err) {
        throw err;
      }

      rows.forEach((row) => {
        data.push(row);
      });
    });

    return {
      message: "success",
      code: 200,
      data: data,
    };
  } catch (error) {
    return { message: `Something went wrong ${err}`, code: 500, data: [] };
  }
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
