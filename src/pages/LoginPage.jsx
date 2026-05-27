import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
    const navigate = useNavigate();

    const [rememberMe, setRememberMe] = useState(true);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // 👇 Buscar usuario por email
        const foundUser = users.find((user) => user.email === email);

        // 👇 Usuario no existe
        if (!foundUser) {
            setError("Usuario incorrecto");
            return;
        }

        // 👇 Contraseña incorrecta
        if (foundUser.password !== password) {
            setError("Contraseña incorrecta");
            return;
        }

        // 👇 Login correcto
        localStorage.setItem("currentUser", JSON.stringify(foundUser));

        setError("");

        navigate("/home");
    };

    return (
        <main className={styles.phone}>
            <div className={styles.content}>
                <section className={styles.brand} aria-label="Marca SafeLink">
                    <div className={styles.logoRow}>
                        <div className={styles.logoText}>
                            Safe<span>Link</span>
                        </div>
                    </div>

                    <div className={styles.tagline}>
                        Tu red de <strong>seguridad</strong> en{" "}
                        <strong>tiempo real</strong>
                    </div>
                </section>

                <form className={styles.card} onSubmit={handleSubmit}>
                    {/* EMAIL */}
                    <label className={styles.field} htmlFor="email">
                        <input
                            id="email"
                            className={styles.input}
                            type="text"
                            placeholder="Usuario"
                            autoComplete="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>

                    {/* PASSWORD */}
                    <label className={styles.field} htmlFor="password">
                        <input
                            id="password"
                            className={styles.input}
                            type="password"
                            placeholder="Contraseña"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <div className={styles.row}>
                        <div className={styles.remember}>
                            <button
                                type="button"
                                className={`${styles.check} ${rememberMe ? styles.active : ""}`}
                                onClick={() => setRememberMe((prev) => !prev)}
                            >
                                ✔
                            </button>

                            <span>Recordarme</span>
                        </div>
                    </div>

                    {/* BOTÓN */}
                    <button className={styles.btnPrimary} type="submit">
                        Iniciar sesión
                    </button>

                    {/* ERROR */}
                    {error && <p className={styles.errorText}>{error}</p>}
                </form>
            </div>
        </main>
    );
}
