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

router.post("/login", (req, res) => {
  const { username, password } = req?.body || {};

  return connection.query(
    {
      sql: "SELECT * FROM `accounts` WHERE username=? && password=?",
      values: [username, password],
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});

router.post("/create", (req, res) => {
  const { fullname, contact_no, username, password, address, email } =
    req?.body || {};

  return connection.query(
    {
      sql: "INSERT INTO `accounts`(`fullname`, `contact_no`, `username`, `password`, `address`, `email`) VALUES (?,?,?,?,?,?)",
      values: [fullname, contact_no, username, password, address, email],
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});

module.exports = router;
