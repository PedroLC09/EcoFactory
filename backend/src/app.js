const express = require("express");
const cors = require("cors");

const machineRoutes = require("./routes/machineRoutes");
const productionRoutes = require("./routes/productionRoutes");
const safetyRoutes = require("./routes/safetyRoutes");

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
app.use("/safety", safetyRoutes);

module.exports = app;