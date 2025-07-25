const express = require("express");
const app = express();
const errorMiddleware = require("./middleWare/error");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload"); // used for image and other files
const path = require("path");

const cors = require("cors");








// routes

const user = require("./route/userRoute");
const order = require("./route/orderRoute");
const product = require("./route/productRoute")
const payment = require("./route/paymentRoute");
const emailVerification = require("./route/emailVerificationRoute");
const review = require("./route/reviewRoutes");
const support = require("./route/supportRoute");
const abusiveReport = require("./route/abusiveReportRoute");

// for req.cookie to get token while autentication
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(fileUpload());
app.use(errorMiddleware);
app.use("/api/v1", emailVerification);
app.use("/api/v1", review);
app.use("/api/v1", support);
app.use("/api/v1", abusiveReport);
// app.use("/api/v1", emailVerification); // for email verification



app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
}
// http://localhost:5000 => backend,frontend

 if (process.env.NODE_ENV === "production") {
 	app.use(express.static(path.join(__dirname, "../frontend/build")));
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
    });
 }





module.exports = app;
