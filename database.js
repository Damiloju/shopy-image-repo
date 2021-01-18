const sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE images (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text Unique, 
            path text Unique,
            quantity integer, 
            price integer
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO images (name, path, quantity,price) VALUES (?,?,?,?)";
          // Prices are saved in pennies to help better handle money
          db.run(insert, ["Building", "images/img1.jpg", 10, 35000]);
          db.run(insert, ["Airbuds", "images/img2.jpg", 10, 45000]);
          db.run(insert, ["Airpods", "images/img3.jpg", 10, 56000]);
          db.run(insert, ["Google buds", "images/img4.jpg", 10, 35340]);
          db.run(insert, ["Some Phone", "images/img5.jpg", 10, 50345]);
          db.run(insert, ["City at Night", "images/img6.jpg", 10, 12405]);
          db.run(insert, ["Work Station", "images/img7.jpg", 10, 34500]);
          db.run(insert, ["Dog", "images/img8.jpg", 10, 85350]);
          db.run(insert, [
            "S20 ultra and Pixel 5",
            "images/img9.jpg",
            10,
            95000,
          ]);
        }
      }
    );
  }
});

module.exports = db;
