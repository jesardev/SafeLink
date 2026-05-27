import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());
app.use(express.json());

// =====================================
// GUARDAR UBICACIÓN
// =====================================

app.post("/location", (req, res) => {

    const { email, lat, lng } = req.body;

    // SOLO ESTA CUENTA PUEDE ENVIAR GPS

    if (email !== "ljesar7@gmail.com") {

        return res.status(403).json({
            error: "No autorizado"
        });

    }

    const data = JSON.parse(
        fs.readFileSync("./db.json", "utf8")
    );

    data.locations[email] = {

        lat,
        lng,
        updatedAt: new Date()

    };

    fs.writeFileSync(
        "./db.json",
        JSON.stringify(data, null, 2)
    );

    console.log("Ubicación actualizada:", lat, lng);

    res.json({
        success: true
    });

});

// =====================================
// OBTENER UBICACIÓN
// =====================================

app.get("/location", (req, res) => {

    const data = JSON.parse(
        fs.readFileSync("./db.json", "utf8")
    );

    res.json(
        data.locations["ljesar7@gmail.com"] || null
    );

});

app.listen(3000, () => {

    console.log("Servidor corriendo en puerto 3000");

});