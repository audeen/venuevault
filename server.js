const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
  });
}
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const venuesRouter = require("./routes/venues");

app.use("/venues", venuesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
