const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");
const axios = require('axios');

mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useNewUrlParser: true })
  .then(() => console.log("Database is connected"))
  .catch(err => console.log(`Cannot connect to the database ${err}`));

const app = express();

app.use(cors());
app.use("/", async (req, res) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    res.status(200).send('Everything works' + data.title);
});

app.listen(config.port, () =>
  console.log(`Server is running on port: ${config.port}`)
);
