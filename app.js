const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("working"));

const CategoryRouter = require("./routes/category");

app.use("/category/", CategoryRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
