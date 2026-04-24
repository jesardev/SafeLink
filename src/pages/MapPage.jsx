import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MapPage.module.css";

export default function MapPage() {
    const navigate = useNavigate();
  const destination = "4.325783,-74.378928";

  const openDirections = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank"
    );

    
  };

  return (
    <div className={styles.container}>

      {/* NAVBAR */}
      <div className={styles.navbar}>

        {/* Flecha */}
        <div className={styles.backBtn} onClick={() => navigate("/home")}>
          <svg viewBox="0 0 24 24">
            <path d="M15 18L9 12L15 6" />
          </svg>
        </div>

        {/* Centro */}
        <div className={styles.brand}>
          <span>SafeLink</span>

          <svg viewBox="0 0 74 74">
            <defs>
              <linearGradient id="shieldGrad" x1="17" y1="12" x2="57" y2="61">
                <stop stopColor="#ffffff"/>
                <stop offset="1" stopColor="#dbeafe"/>
              </linearGradient>
            </defs>
            <path d="M37 7L56 14V30C56 43.5 47.6 55.1 37 61C26.4 55.1 18 43.5 18 30V14L37 7Z" fill="url(#shieldGrad)"/>
          </svg>
        </div>

      </div>

      {/* MAPA */}
      <iframe
        className={styles.map}
        src={`https://www.google.com/maps?q=${destination}&z=16&output=embed`}
      ></iframe>

      {/* BOTÓN */}
      <button className={styles.btn} onClick={openDirections}>
        Cómo llegar
      </button>

    </div>
  );
}