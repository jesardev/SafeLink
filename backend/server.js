import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

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
// CONFIGURACIÓN GMAIL
// ======================================

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: "proyectojesgab@gmail.com",

        pass: "mpvx nekw eagq wofm",

    },

});

// ======================================
// GET UBICACIÓN
// ======================================

app.get("/location", (req, res) => {

    res.json(currentLocation);

});

// ======================================
// POST UBICACIÓN
// ======================================

app.post("/location", (req, res) => {

    const { lat, lng } = req.body;

    currentLocation = {
        lat,
        lng,
    };

    console.log("Nueva ubicación:", currentLocation);

    res.json({
        success: true,
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

    try {

        await transporter.sendMail({

            from: "proyectojesgab@gmail.com",

            to: "proyectojesgab@gmail.com",

            subject: "🚨 ALERTA SOS - SafeLink",

            html: `
                <h1>🚨 ALERTA SOS ACTIVADA</h1>

                <p>
                    El usuario ha presionado el botón de emergencia.
                </p>

                <p>
                    Revise la ubicación en tiempo real en SafeLink.
                </p>
            `,

        });

        console.log("📧 Correo enviado");

    } catch (error) {

        console.log(error);

    }

    res.json({
        success: true,
    });

});

// ======================================
// RESET SOS
// ======================================

app.post("/reset-sos", (req, res) => {

    sosActive = false;

    console.log("SOS desactivado");

    res.json({
        success: true,
    });

});

// ======================================
// SERVER
// ======================================

app.listen(3000, () => {

    console.log("Servidor corriendo en puerto 3000");

});