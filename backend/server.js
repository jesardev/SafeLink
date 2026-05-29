import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ======================================
// RESEND
// ======================================

const resend = new Resend(
    process.env.RESEND_API_KEY
);

// ======================================
// GPS
// ======================================

let currentLocation = {
    lat: 4.335467,
    lng: -74.370949,
};

// ======================================
// SOS
// ======================================

let sosActive = false;

// ======================================
// ROOT
// ======================================

app.get("/", (req, res) => {

    res.send(
        "Backend SafeLink funcionando 🚀"
    );

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

    console.log(
        "📍 Nueva ubicación:",
        currentLocation
    );

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

    console.log(
        "🚨 ALERTA SOS ACTIVADA"
    );

    res.json({
        success: true,
        message: "SOS activado",
    });

    try {

        console.log(
            "📧 Enviando correo con Resend..."
        );

        const data = await resend.emails.send({

            from:
                "SafeLink <onboarding@resend.dev>",

            to: "jesar.dev@gmail.com",

            subject:
                "🚨 ALERTA SOS - SafeLink",

            html: `
                <h1>
                    🚨 ALERTA SOS ACTIVADA
                </h1>

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

        console.log(
            "✅ CORREO ENVIADO"
        );

        console.log(data);

    } catch (error) {

        console.log(
            "❌ ERROR RESEND:"
        );

        console.log(error);

    }

});

// ======================================
// RESET SOS
// ======================================

app.post("/reset-sos", (req, res) => {

    sosActive = false;

    res.json({
        success: true,
    });

});

// ======================================
// SERVER
// ======================================

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `Servidor corriendo en puerto ${PORT}`
    );

});
