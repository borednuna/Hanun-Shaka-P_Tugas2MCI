const express = require("express");
const app = express();
const cors = require("cors");
const port = 80 || 443 || 3000;

const sesiRoute = require("./app/routes/sesiRoutes.js");
const seatingRoute = require("./app/routes/seatingRoutes.js");
const userRoute = require("./app/routes/userRoutes.js");
const pembayaranRoute = require("./app/routes/pembayaranRoutes.js");
const detail_sesiRoute = require("./app/routes/detailSesiRoutes.js");
const bookingRoute = require("./app/routes/bookingRoutes.js");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/sesi", sesiRoute);
app.use("/seating", seatingRoute);
app.use("/user", userRoute);
app.use("/pembayaran", pembayaranRoute);
app.use("/detail_sesi", detail_sesiRoute);
app.use("/booking", bookingRoute);

app.get('/', (req, res) => res.send('Repository for project Backend MCI 2023 => https://github.com/borednuna/Hanun-Shaka-P_Tugas2MCI'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
