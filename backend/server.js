import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ======================================
// UBICACIÓN GPS
// ======================================

let currentLocation = {
    lat: 4.325783,
    lng: -74.378928,
};

// ======================================
// ESTADO SOS
// ======================================

let sosActive = false;

// ======================================
// TRANSPORTER EMAIL
// ======================================

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",

    port: 465,

    secure: true,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },

    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

// ======================================
// ROOT
// ======================================

app.get("/", (req, res) => {

    res.send("Backend SafeLink funcionando 🚀");

});

// ======================================
// GET LOCATION
// ======================================

app.get("/location", (req, res) => {

    res.json(currentLocation);

});

// ======================================
// POST LOCATION
// ======================================

app.post("/location", (req, res) => {

    const { lat, lng, email } = req.body;

    // SOLO ESTA CUENTA PUEDE COMPARTIR GPS
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

// ======================================
// GET SOS
// ======================================

app.get("/sos", (req, res) => {

    res.json({
        active: sosActive,
    });

});

// ======================================
// POST SOS
// ======================================

app.post("/sos", async (req, res) => {

    sosActive = true;

    console.log("🚨 ALERTA SOS ACTIVADA");

    // RESPUESTA RÁPIDA
    res.json({
        success: true,
        message: "SOS activado",
    });

    // DEBUG VARIABLES
    console.log(
        "EMAIL_USER existe:",
        !!process.env.EMAIL_USER
    );

    console.log(
        "EMAIL_PASS existe:",
        !!process.env.EMAIL_PASS
    );

    try {

        console.log("📧 Intentando enviar correo...");

        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: "proyectojesgab@gmail.com",

            subject: "🚨 ALERTA SOS - SafeLink",

            html: `
                <h1>🚨 ALERTA SOS ACTIVADA</h1>

                <p>
                    Se ha presionado el botón físico del dispositivo SafeLink.
                </p>

                <p>
                    Última ubicación registrada:
                </p>

                <p>
                    Latitud: ${currentLocation.lat}
                </p>

                <p>
                    Longitud: ${currentLocation.lng}
                </p>

                <p>
                    <a href="https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}">
                        Ver ubicación en Google Maps
                    </a>
                </p>
            `,
        });

        console.log("✅ CORREO ENVIADO");

    } catch (error) {

        console.log("❌ ERROR ENVIANDO CORREO:");

        console.log(error);

    }

});

// ======================================
// RESET SOS
// ======================================

app.post("/reset-sos", (req, res) => {

    sosActive = false;

    console.log("SOS reiniciado");

    res.json({
        success: true,
    });

});

// ======================================
// SERVER
// ======================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor corriendo en puerto ${PORT}`
    );

});