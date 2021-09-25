const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");

const app = express();

const PORT = process.env.PORT;

dotenv.config();
app.use(express.json());
app.use(cors());

//db config
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MONGODB Connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  console.log(Home);
});
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running");
});
