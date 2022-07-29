import express from "express";
import configViewEngine from "./configs/ViewEngine";
import initWebRoute from "./route/web";
import connection from "./configs/connectDB";

require("dotenv").config();
console.log(process.env);

const app = express();
const port = process.env.PORT;
console.log(">>>> check port: ", port);

//setup view engine
configViewEngine(app);

//in it web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
