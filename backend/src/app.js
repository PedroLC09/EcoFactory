const express = require("express");
const cors = require("cors");

const machineRoutes = require("./routes/machineRoutes");

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

module.exports = app;