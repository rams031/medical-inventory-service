const router = require("express").Router();
const { connection } = require("./../db/connection");

router.get("/", (req, res) => {
  return connection.query(
    {
      sql: "SELECT * FROM `accounts`",
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});
module.exports = router;