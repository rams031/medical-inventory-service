const router = require("express").Router();
const { connection } = require("./../db/connection");

router.get("/", (req, res) => {
  return connection.query(
    {
      sql: "SELECT * FROM `barangay`",
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params || {};

  return connection.query(
    {
      sql: "SELECT * FROM `barangay` WHERE id=?",
      values: [id],
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});

router.post("/create", (req, res) => {
  const { barangayLogo, barangayName, barangayDescription, barangayAddress } =
    req?.body || {};

  return connection.query(
    {
      sql: "INSERT INTO `barangay`( `barangayName`, `barangayLogo`, `barangayDescription`, `barangayAddress`) VALUES (?,?,?,?)",
      values: [
        barangayName,
        barangayLogo,
        barangayDescription,
        barangayAddress,
      ],
    },
    function (error, results, fields) {
      if (error) return res.status(400).send(error);
      res.status(200).json(results);
    }
  );
});

module.exports = router;
