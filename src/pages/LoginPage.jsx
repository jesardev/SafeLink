import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
    const navigate = useNavigate();
    const [rememberMe, setRememberMe] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Por ahora no hace nada, solo evita que el formulario recargue la página.
        // Aquí después conectas el login real.
    };

    return (
        <main className={styles.phone}>
            <div className={styles.content}>
                <section className={styles.brand} aria-label="Marca SafeLink">
                    <div className={styles.logoRow}>
                        <svg
                            width="74"
                            height="74"
                            viewBox="0 0 74 74"
                            fill="none"
                            aria-hidden="true"
                        >
                            <defs>
                                <linearGradient
                                    id="shieldGrad"
                                    x1="17"
                                    y1="12"
                                    x2="57"
                                    y2="61"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#2B7CF8" />
                                    <stop offset="1" stopColor="#0D4FCA" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M37 7L56 14V30C56 43.5 47.6 55.1 37 61C26.4 55.1 18 43.5 18 30V14L37 7Z"
                                fill="url(#shieldGrad)"
                            />
                            <path
                                d="M22 28C19 33 17 37 17 37C17 37 19 41 22 46"
                                stroke="#0E57D9"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                            />
                            <circle cx="37" cy="31" r="7.2" fill="white" />
                            <circle cx="37" cy="31" r="4" fill="#2C74F5" />
                        </svg>

                        <div className={styles.logoText}>
                            Safe<span>Link</span>
                        </div>
                    </div>

                    <div className={styles.tagline}>
                        Tu red de <strong>seguridad</strong> en{" "}
                        <strong>tiempo real</strong>
                    </div>
                </section>

                <form
                    className={styles.card}
                    onSubmit={handleSubmit}
                    aria-label="Formulario de inicio de sesión"
                >
                    <label className={styles.field} htmlFor="email">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M4 6.5H20C20.8 6.5 21.5 7.2 21.5 8V16C21.5 16.8 20.8 17.5 20 17.5H4C3.2 17.5 2.5 16.8 2.5 16V8C2.5 7.2 3.2 6.5 4 6.5Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.5 7L12 13L20.5 7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <input
                            id="email"
                            className={styles.input}
                            type="text"
                            placeholder="Usuario"
                            autoComplete="username"
                        />
                    </label>

                    <label className={styles.field} htmlFor="password">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path
                                d="M7.5 11V8.7C7.5 6.3 9.4 4.5 12 4.5C14.6 4.5 16.5 6.3 16.5 8.7V11"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.5 11H17.5C18.3 11 19 11.7 19 12.5V18C19 18.8 18.3 19.5 17.5 19.5H6.5C5.7 19.5 5 18.8 5 18V12.5C5 11.7 5.7 11 6.5 11Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M12 14.2V16.4" strokeLinecap="round" />
                        </svg>

                        <input
                            id="password"
                            className={styles.input}
                            type="password"
                            placeholder="Contraseña"
                            autoComplete="current-password"
                        />

                        <svg
                            className={styles.eye}
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path
                                d="M2.5 12S6.3 5.5 12 5.5 21.5 12 21.5 12 17.7 18.5 12 18.5 2.5 12 2.5 12Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9.5 12A2.5 2.5 0 1 0 14.5 12A2.5 2.5 0 1 0 9.5 12Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M4.5 4.5L19.5 19.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </label>

                    <div className={styles.row}>
                        <div className={styles.remember}>
                            <button
                                type="button"
                                className={`${styles.check} ${rememberMe ? styles.active : ""}`}
                                onClick={() => setRememberMe((prev) => !prev)}
                                aria-pressed={rememberMe}
                                aria-label="Recordarme"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5.5 12.5L10 17L18.5 7.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            <span>Recordarme</span>
                        </div>

                        <a href="#" className={styles.forgot}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                        
                    <button className={styles.btnPrimary} type="submit" onClick={() => navigate("/home")}>
                        <svg
                            className={styles.lock}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M7.5 10V7.8C7.5 5.1 9.6 3 12.3 3C15 3 17.1 5.1 17.1 7.8V10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M6.5 10H18.5C19.3 10 20 10.7 20 11.5V19C20 19.8 19.3 20.5 18.5 20.5H6.5C5.7 20.5 5 19.8 5 19V11.5C5 10.7 5.7 10 6.5 10Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M12.5 14.2V16.4" strokeLinecap="round" />
                        </svg>
                        Iniciar sesión
                    </button>

                    <p className={styles.errorText}>
                        Usuario o contraseña incorrectos
                    </p>

                    <div className={styles.divider}>o</div>

                    <div className={styles.social}>
                        <svg
                            className={styles.g}
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                fill="#FFC107"
                                d="M43.6 20.6H42V20.5H24v7h11.3C33.7 32.8 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 6 1.2 8.2 3.1l4.9-4.9C34.6 7.2 29.7 5 24 5 12.4 5 3 14.4 3 26s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.4z"
                            />
                            <path
                                fill="#FF3D00"
                                d="M6.3 14.7l5.7 4.2C13.6 15.4 18.4 12 24 12c3.1 0 6 1.2 8.2 3.1l4.9-4.9C34.6 7.2 29.7 5 24 5c-8.3 0-15.4 4.7-18.7 11.7z"
                            />
                            <path
                                fill="#4CAF50"
                                d="M24 47c5.6 0 10.8-2.1 14.7-5.6l-6.8-5.7C29.7 37.7 27 39 24 39c-5.3 0-9.8-3.2-11.3-7.7l-5.6 4.4C10.3 42.3 16.6 47 24 47z"
                            />
                            <path
                                fill="#1976D2"
                                d="M43.6 20.6H42V20.5H24v7h11.3c-1 3.2-3.1 5.8-6 7.2l.1-.1 6.8 5.7C36.7 39.6 45 33 45 26c0-1.2-.1-2.3-.4-3.4z"
                            />
                        </svg>
                        Continuar con <strong>Google</strong>
                    </div>

                    <div className={styles.social}>
                        <svg
                            className={styles.apple}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M16.9 12.6c0-2 1.7-3 1.8-3.1-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.8-2.6-.8-1.4 0-2.7.8-3.4 2-1.5 2.6-.4 6.5 1 8.6.7 1 1.4 2 2.4 1.9.9 0 1.3-.6 2.4-.6 1.1 0 1.4.6 2.4.6 1 0 1.7-1 2.4-2 0 0 .9-1.2 1.2-2.4-3.1-1.2-3.1-4.5-3.1-4.5zM14.5 4.3c.6-.8 1.1-1.9 1-3.1-1 .1-2.1.7-2.7 1.5-.5.7-1.1 1.8-1 2.9 1.1.1 2.1-.6 2.7-1.3z" />
                        </svg>
                        Continuar con <strong>Apple</strong>
                    </div>

                    <div className={styles.signup}>
                        ¿No tienes cuenta? <a href="#">Regístrate</a>
                    </div>
                </form>

                <footer className={styles.footer}>
                    <div className={styles.footerTop}>
                        <svg
                            className={styles.shield}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 3L19 6V11C19 15.9 15.8 19.7 12 21C8.2 19.7 5 15.9 5 11V6L12 3Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path d="M12 10.5V13.8" strokeLinecap="round" />
                            <circle
                                cx="12"
                                cy="8.9"
                                r="0.9"
                                fill="currentColor"
                                stroke="none"
                            />
                        </svg>
                        Conexión segura
                    </div>
                    <div className={styles.sub}>Tus datos están protegidos</div>
                </footer>
            </div>
        </main>
    );
}
