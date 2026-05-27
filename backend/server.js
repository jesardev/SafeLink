import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());

// ======================================
// UBICACIÓN GPS EN MEMORIA
// ======================================

let currentLocation = {
    lat: 4.325783,
    lng: -74.378928,
};

// ======================================
// ESTADO SOS EN MEMORIA
// ======================================

let sosActive = false;

// ======================================
// CONFIGURACIÓN DE CORREO GMAIL
// ======================================

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,

    // Fuerza IPv4 para evitar errores de IPv6 en Render
    family: 4,

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },

    connectionTimeout: 10000,
});

// ======================================
// RUTA PRINCIPAL
// ======================================

app.get("/", (req, res) => {
    res.send("Backend SafeLink funcionando 🚀");
});

// ======================================
// OBTENER UBICACIÓN
// ======================================

app.get("/location", (req, res) => {
    res.json(currentLocation);
});

// ======================================
// GUARDAR UBICACIÓN
// ======================================

app.post("/location", (req, res) => {
    const { lat, lng, email } = req.body;

    // Solo esta cuenta puede enviar ubicación real
    if (email !== "ljesar7@gmail.com") {
        return res.status(403).json({
            success: false,
            message: "No autorizado para compartir ubicación",
        });
    }

    currentLocation = {
        lat,
        lng,
    };

    console.log("Nueva ubicación recibida:", currentLocation);

    res.json({
        success: true,
        message: "Ubicación actualizada",
        location: currentLocation,
    });
});

// ======================================
// CONSULTAR ESTADO SOS
// ======================================

app.get("/sos", (req, res) => {
    res.json({
        active: sosActive,
    });
});

// ======================================
// ACTIVAR SOS
// ======================================

app.post("/sos", async (req, res) => {
    sosActive = true;

    console.log("🚨 ALERTA SOS ACTIVADA");

    // Respondemos rápido al ESP32 / Hoppscotch / frontend
    res.json({
        success: true,
        message: "SOS activado",
    });

    // Después intentamos enviar el correo
    try {
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
                    Revisa la ubicación en tiempo real desde la plataforma.
                </p>

                <p>
                    Última ubicación registrada:
                </p>

                <p>
                    Latitud: ${currentLocation.lat}<br />
                    Longitud: ${currentLocation.lng}
                </p>

                <p>
                    <a href="https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}">
                        Ver ubicación en Google Maps
                    </a>
                </p>
            `,
        });

        console.log("📧 Correo SOS enviado");
    } catch (error) {
        console.log("Error enviando correo:", error);
    }
});

// ======================================
// REINICIAR SOS
// ======================================

app.post("/reset-sos", (req, res) => {
    sosActive = false;

    console.log("SOS reiniciado");

    res.json({
        success: true,
        message: "SOS reiniciado",
    });
});

// ======================================
// SERVIDOR
// ======================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});