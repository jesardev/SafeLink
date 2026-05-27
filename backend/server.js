import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


// 👇 UBICACIÓN ACTUAL EN MEMORIA
let currentLocation = {
    lat: 4.325783,
    lng: -74.378928,
};


// 👇 RUTA PRINCIPAL
app.get("/", (req, res) => {
    res.send("Backend SafeLink funcionando 🚀");
});


// 👇 GUARDAR UBICACIÓN
app.post("/location", (req, res) => {

    const { lat, lng, email } = req.body;

    // SOLO EL TRACKER PUEDE ACTUALIZAR
    if (email !== "ljesar7@gmail.com") {

        return res.status(403).json({
            message: "No autorizado",
        });

    }

    currentLocation = {
        lat,
        lng,
    };

    console.log("Nueva ubicación:", currentLocation);

    res.json({
        success: true,
    });

});


// 👇 OBTENER UBICACIÓN
app.get("/location", (req, res) => {

    res.json(currentLocation);

});


app.listen(3000, () => {

    console.log("Servidor corriendo en puerto 3000");

});