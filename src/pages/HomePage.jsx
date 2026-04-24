import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(true);

    const lucasImage = "/src/assets/perro.jpg";
    const juanImage = "/src/assets/juan.jpg";

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className={styles.phone}>
            <div className={styles.topbar}>
                <button
                    className={styles.iconBtn}
                    type="button"
                    aria-label="Menú"
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

                <button
                    className={styles.iconBtn}
                    type="button"
                    aria-label="Perfil"
                >
                    <svg
                        className={styles.icon}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M12 12.5C14.3 12.5 16.2 10.6 16.2 8.3C16.2 6 14.3 4.1 12 4.1C9.7 4.1 7.8 6 7.8 8.3C7.8 10.6 9.7 12.5 12 12.5Z"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M5.2 20C6.7 16.8 9.1 15.2 12 15.2C14.9 15.2 17.3 16.8 18.8 20"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>

            <header className={styles.header}>
                <h1 className={styles.title}>SafeLink</h1>
                <p className={styles.subtitle}>
                    Panel de seguimiento y seguridad
                </p>
            </header>

            <section className={styles.content}>
                <div className={styles.panel}>
                    <p className={styles.devicesLabel}>
                        Dispositivos conectados
                    </p>

                    <article
                        className={styles.deviceCard}
                        aria-label="Dispositivo Lucas"
                    >
                        <div className={styles.avatarWrap}>
                            <div className={styles.avatar}>
                                <img src={lucasImage} alt="Lucas" />
                            </div>
                        </div>

                        <div className={styles.deviceInfo}>
                            <h2 className={styles.deviceName}>Lucas</h2>
                            <p className={styles.deviceLocation}>
                                Fusagasugá, Cundinamarca
                            </p>

                            <div className={styles.statusRow}>
                                <span className={styles.dot}></span>
                                <span>Conectado ahora</span>
                                <span
                                    className={styles.battery}
                                    aria-hidden="true"
                                ></span>
                            </div>

                            <div
                                className={styles.miniActions}
                                aria-hidden="true"
                            >
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
                                    onClick={() => navigate("/mapa")}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M12 21s6-4.8 6-10.5A6 6 0 1 0 6 10.5C6 16.2 12 21 12 21Z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="12" cy="10.5" r="1.8" />
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
                    <article
                        className={styles.deviceCard}
                        aria-label="Dispositivo Mateo"
                    >
                        <div className={styles.avatarWrap}>
                            <div className={styles.avatar}>
                                <img src={juanImage} alt="Mateo" />
                            </div>
                        </div>

                        <div className={styles.deviceInfo}>
                            <h2 className={styles.deviceName}>Juan</h2>
                            <p className={styles.deviceLocation}>
                                Fusagasugá, Cundinamarca
                            </p>

                            <div className={styles.statusRow}>
                                <span className={styles.dot}></span>
                                <span>Conectado ahora</span>
                                <span className={styles.battery}></span>
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

                                {/* 👇 ESTE ES EL CAMBIO IMPORTANTE */}
                                <div
                                    className={styles.miniAction}
                                    onClick={() => navigate("/mapa2")}
                                >
                                    <svg viewBox="0 0 24 24">
                                        <path
                                            d="M12 21s6-4.8 6-10.5A6 6 0 1 0 6 10.5C6 16.2 12 21 12 21Z"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <circle cx="12" cy="10.5" r="1.8" />
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
                </div>

                <div className={styles.footerSpace}></div>
            </section>
        </main>
    );
}
