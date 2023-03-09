const router = require("express").Router();
const { connection } = require("./../db/connection");

connection.connect();

router.get("/", (req, res) => {
  return connection.query(
    "SELECT * FROM `categories`",
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

router.post("/create", (req, res) => {
  const { categoryName } = req?.body || {};

  return connection.query(
    {
      sql: "INSERT INTO `categories`(`name`) VALUES (?)",
      values: [categoryName],
    },
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

router.put("/update", (req, res) => {
  const { categoryName, categoryId } = req.body || {};

  return connection.query(
    {
      sql: "UPDATE `categories` SET `name`=? WHERE id=?",
      values: [categoryName, categoryId],
    },
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

router.delete("/delete", (req, res) => {
  const { categoryId } = req?.body || {};

  return connection.query(
    {
      sql: "DELETE FROM `categories` WHERE id=?",
      values: [categoryId],
    },
    function (error, results, fields) {
      if (error) throw error;
      res.status(200).json(results);
    }
  );
});

module.exports = router;
