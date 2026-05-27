import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {

    const navigate = useNavigate();

    // 👇 ABRIR/CERRAR MENÚ
    const [menuOpen, setMenuOpen] = useState(false);

    // 👇 USUARIO LOGUEADO
    const currentUser = JSON.parse(
        localStorage.getItem("currentUser")
    );

    // ==================================================
    // GPS EN TIEMPO REAL
    // SOLO LA CUENTA TRACKER COMPARTE UBICACIÓN
    // ==================================================

    useEffect(() => {

        if (currentUser.role === "tracker") {

            navigator.geolocation.watchPosition(

                async (position) => {

                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;

                    console.log("Ubicación enviada:", lat, lng);

                    try {

                        await fetch(
                            "http://localhost:3000/location",
                            {

                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json",
                                },

                                body: JSON.stringify({

                                    email: currentUser.email,

                                    lat,
                                    lng,

                                }),

                            }
                        );

                    } catch (error) {

                        console.log(error);

                    }

                },

                (error) => {

                    console.log(error);

                },

                {
                    enableHighAccuracy: true,
                }

            );

        }

    }, []);

    // 👇 CERRAR SESIÓN
    const handleLogout = () => {

        localStorage.removeItem("currentUser");

        navigate("/");

    };

    return (

        <main className={styles.phone}>

            {/* OVERLAY */}
            {menuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* SIDEBAR */}
            <div
                className={`${styles.sidebar} ${
                    menuOpen ? styles.sidebarOpen : ""
                }`}
            >

                <div className={styles.sidebarHeader}>

                    <h2>Menú</h2>

                    <button
                        className={styles.closeBtn}
                        onClick={() => setMenuOpen(false)}
                    >
                        ✕
                    </button>

                </div>

                <div className={styles.sidebarContent}>

                    <button
                        className={styles.logoutBtn}
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>

            {/* TOPBAR */}
            <div className={styles.topbar}>

                <button
                    className={styles.iconBtn}
                    type="button"
                    aria-label="Menú"
                    onClick={() => setMenuOpen(true)}
                >

                    <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >

                        <path d="M4 7H20" strokeLinecap="round" />

                        <path d="M4 12H20" strokeLinecap="round" />

                        <path d="M4 17H20" strokeLinecap="round" />

                    </svg>

                </button>

            </div>

            {/* HEADER */}
            <header className={styles.header}>

                <h1 className={styles.title}>
                    SafeLink
                </h1>

                <p className={styles.subtitle}>
                    Panel de seguimiento y seguridad
                </p>

            </header>

            {/* CONTENT */}
            <section className={styles.content}>

                <div className={styles.panel}>

                    <p className={styles.devicesLabel}>
                        Dispositivos conectados
                    </p>

                    {/* 👇 GENERAR DISPOSITIVOS */}
                    {currentUser.devices.map((device) => (

                        <article
                            key={device.id}
                            className={styles.deviceCard}
                        >

                            <div className={styles.avatarWrap}>

                                <div className={styles.avatar}>

                                    <img
                                        src={device.image}
                                        alt={device.name}
                                    />

                                </div>

                            </div>

                            <div className={styles.deviceInfo}>

                                <h2 className={styles.deviceName}>
                                    {device.name}
                                </h2>

                                <p className={styles.deviceLocation}>
                                    {device.location}
                                </p>

                                <div className={styles.statusRow}>

                                    <span className={styles.dot}></span>

                                    <span>
                                        {device.status}
                                    </span>

                                    <span
                                        className={styles.battery}
                                        aria-hidden="true"
                                    ></span>

                                </div>

                                <div className={styles.miniActions}>

                                    <div className={styles.miniAction}>

                                        <svg viewBox="0 0 24 24">

                                            <path
                                                d="M12 20V10"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="M8 14L12 10L16 14"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            <path
                                                d="M5 20H19"
                                                strokeLinecap="round"
                                            />

                                        </svg>

                                    </div>

                                    <div
                                        className={styles.miniAction}
                                        onClick={() =>
                                            navigate(device.map)
                                        }
                                    >

                                        <svg viewBox="0 0 24 24">

                                            <path
                                                d="M12 21s6-4.8 6-10.5A6 6 0 1 0 6 10.5C6 16.2 12 21 12 21Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            <circle
                                                cx="12"
                                                cy="10.5"
                                                r="1.8"
                                            />

                                        </svg>

                                    </div>

                                    <div className={styles.miniAction}>

                                        <svg viewBox="0 0 24 24">

                                            <path
                                                d="M6 12h12"
                                                strokeLinecap="round"
                                            />

                                            <path
                                                d="M10 8l-4 4l4 4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                        </svg>

                                    </div>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

                <div className={styles.footerSpace}></div>

            </section>

        </main>

    );
}