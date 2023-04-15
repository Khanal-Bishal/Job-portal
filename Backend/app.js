const express = require("express");
const app = express();
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./configs/config.env", override: true });
require("./configs/db");

const pathNotFound = require("./middlewares/404errorhandler");
const customErrorHandler = require("./middlewares/customErrorHandler");

const employeerRoutes = require("./routes/employeerAuth");
const jobsRoute = require("./routes/jobs");

//global middlewares
app.use(express.json());

//route level middlewares
app.use("/api/employeer", employeerRoutes);
app.use("/api/jobs", jobsRoute);

app.use(pathNotFound);
app.use(customErrorHandler);

//Connection to DB
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening from port number :${PORT}`.rainbow);
});
