import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

let currentLocation = {
    lat: 4.325783,
    lng: -74.378928,
};

let sosActive = false;

app.get("/", (req, res) => {
    res.send("Backend SafeLink funcionando 🚀");
});

app.get("/location", (req, res) => {
    res.json(currentLocation);
});

app.post("/location", (req, res) => {
    const { lat, lng, email } = req.body;

    if (email !== "ljesar7@gmail.com") {
        return res.status(403).json({
            success: false,
            message: "No autorizado",
        });
    }

    currentLocation = {
        lat,
        lng,
    };

    console.log("📍 Nueva ubicación:", currentLocation);

    res.json({
        success: true,
        location: currentLocation,
    });
});

app.get("/sos", (req, res) => {
    res.json({
        active: sosActive,
    });
});

app.post("/sos", async (req, res) => {
    sosActive = true;

    console.log("🚨 ALERTA SOS ACTIVADA");

    res.json({
        success: true,
        message: "SOS activado",
    });

    try {
        console.log("📧 Enviando correo con FormSubmit...");

        const response = await fetch(
            "https://formsubmit.co/ajax/proyectojesgab@gmail.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    subject: "🚨 ALERTA SOS - SafeLink",
                    name: "SafeLink SOS",
                    message: `
ALERTA SOS ACTIVADA

Se ha presionado el botón físico del dispositivo SafeLink.

Última ubicación registrada:
Latitud: ${currentLocation.lat}
Longitud: ${currentLocation.lng}

Google Maps:
https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}
                    `,
                }),
            }
        );

        const data = await response.json();

        console.log("Respuesta FormSubmit:", data);
    } catch (error) {
        console.log("❌ Error enviando FormSubmit:");
        console.log(error);
    }
});

app.post("/reset-sos", (req, res) => {
    sosActive = false;

    console.log("SOS reiniciado");

    res.json({
        success: true,
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});