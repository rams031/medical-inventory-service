const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { connection } = require("./db/connection");
const port = process.env.PORT || 3001;

connection.connect((err) => {
  if (err) return console.error("error connecting: " + err.stack);
  return console.log("connected as id " + connection.threadId);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("working"));

const AccountRouter = require("./routes/accounts");
const CategoryRouter = require("./routes/category");
const MedicineRouter = require("./routes/medicine");
const ActivityRouter = require("./routes/activity");

app.use("/category/", CategoryRouter);
app.use("/medicine/", MedicineRouter);
app.use("/account/", AccountRouter);
app.use("/activity/", AccountRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
