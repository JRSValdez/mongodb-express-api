import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";

const app = express();

const PORT = 4000;

//mongoose connection
mongoose.connect("mongodb://mongodb:27017/CRMdb", {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "connection error:"));
conn.once("open", function () {
  console.log("db connection open");
});

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.get("/", (req, res) => {
  res.send(`Hello Wordl, server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.debug(`Server running on PORT: ${PORT}`);
});
