const router = require("express").Router();
const { connection } = require("./../db/connection");

router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM `categories`",
    function (error, results, fields) {
      if (error) return res.send(error);
      return res.status(200).json(results);
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
      if (error) return res.send(error);
      return res.status(200).json(results);
    }
  );
});

router.post("/update", (req, res) => {
  const { categoryName, categoryId } = req.body || {};

  return connection.query(
    {
      sql: "UPDATE `categories` SET `name`=? WHERE id=?",
      values: [categoryName, categoryId],
    },
    function (error, results, fields) {
      console.log(`error:`, error);
      if (error) return res.send(error);
      return res.status(200).json(results);
    }
  );
});

router.post("/delete", (req, res) => {
  const { categoryId } = req?.body || {};

  return connection.query(
    {
      sql: "DELETE FROM `categories` WHERE id=?",
      values: [categoryId],
    },
    function (error, results, fields) {
      if (error) return res.send(error);
      return res.status(200).json(results);
    }
  );
});

module.exports = router;
