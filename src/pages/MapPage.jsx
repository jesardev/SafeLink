import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage.module.css";

export default function MapPage() {

    const navigate = useNavigate();

    // 👇 UBICACIÓN DINÁMICA
    const [location, setLocation] = useState(null);

    // ==========================================
    // OBTENER UBICACIÓN DEL BACKEND
    // ==========================================

    useEffect(() => {

        const interval = setInterval(async () => {

            try {

                const response = await fetch(
                    "http://localhost:3000/location"
                );

                const data = await response.json();

                console.log(data);

                setLocation(data);

            } catch (error) {

                console.log(error);

            }

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    // ==========================================
    // ABRIR GOOGLE MAPS
    // ==========================================

    const openDirections = () => {

        if (!location) return;

        window.open(

            `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,

            "_blank"

        );

    };

    return (

        <div className={styles.container}>

            {/* NAVBAR */}
            <div className={styles.navbar}>

                {/* FLECHA */}
                <div
                    className={styles.backBtn}
                    onClick={() => navigate("/home")}
                >

                    <svg viewBox="0 0 24 24">
                        <path d="M15 18L9 12L15 6" />
                    </svg>

                </div>

                {/* LOGO */}
                <div className={styles.brand}>

                    <span>SafeLink</span>

                    <svg viewBox="0 0 74 74">

                        <defs>

                            <linearGradient
                                id="shieldGrad"
                                x1="17"
                                y1="12"
                                x2="57"
                                y2="61"
                            >

                                <stop stopColor="#ffffff" />

                                <stop
                                    offset="1"
                                    stopColor="#dbeafe"
                                />

                            </linearGradient>

                        </defs>

                        <path
                            d="M37 7L56 14V30C56 43.5 47.6 55.1 37 61C26.4 55.1 18 43.5 18 30V14L37 7Z"
                            fill="url(#shieldGrad)"
                        />

                    </svg>

                </div>

            </div>

            {/* MAPA */}

            {location ? (

                <iframe
                    className={styles.map}
                    src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=16&output=embed`}
                ></iframe>

            ) : (

                <p>Cargando ubicación...</p>

            )}

            {/* BOTÓN */}

            <button
                className={styles.btn}
                onClick={openDirections}
            >

                Cómo llegar

            </button>

        </div>

    );

}