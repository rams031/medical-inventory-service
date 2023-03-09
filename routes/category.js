const router = require("express").Router();
const { connection } = require("./../db/connection");

connection.connect();

router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM `categories`",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

module.exports = router;
