// // router.js

const express = require("express");
const router = express.Router();
// controller functions
const blogSSR = require("../controllers/paymentSSRController");
const verifyToken = require("../middlewares/requireAuthSSR")

// require auth for all routes
router.use(verifyToken)

// SSR
// End1: Route to render index.html with payments using EJS
router.get("/", blogSSR.renderPayments);
// End2: Define a route to render the addpayment.ejs view
router.get("/addpayment", blogSSR.renderForm);
// End3:Route to add  payment using EJ
router.post("/addpayment", blogSSR.addPayment);
// Define a route to render the singlepayment.ejs view
router.get("/single-payment/:id", blogSSR.renderPayment);
// Define a route to delete singlepayment
router.delete("/single-payment/:id", blogSSR.deletePayment);
// Define a route to update single payment.ejs
router.put("/single-payment/:id", blogSSR.updatePayment);
// Define payment to update
router.get("/single-payment/update/:id", blogSSR.renderUpdatePayment);

module.exports = router;