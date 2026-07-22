const express = require("express");
const cors = require("cors");

const machineRoutes = require("./routes/machineRoutes");
const productionRoutes = require("./routes/productionRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "OK",
        mensagem: "API EcoFactory funcionando!"
    });
});

app.use("/machines", machineRoutes);
app.use("/productions", productionRoutes);

module.exports = app;