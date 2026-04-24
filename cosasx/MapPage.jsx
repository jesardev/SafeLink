import styles from "./MapPage.module.css";

export default function MapPage() {
  return (
    <main className={styles.app}>
      <div className={styles.map} aria-hidden="true">
        <div className={`${styles.road} ${styles.r1}`}></div>
        <div className={`${styles.road} ${styles.r2}`}></div>
        <div className={`${styles.road} ${styles.r3}`}></div>
        <div className={`${styles.road} ${styles.r4}`}></div>
        <div className={`${styles.lake} ${styles.l1}`}></div>
        <div className={`${styles.lake} ${styles.l2}`}></div>
      </div>

      <div className={styles.topbar}>
        <button className={styles.back} type="button" aria-label="Volver">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className={styles.titlebox}>
          <h1>Tu ubicación en tiempo real</h1>
          <p>Modo demostración sin permisos</p>
        </div>

        <button className={styles.share} type="button" aria-label="Compartir">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M16 8L8 12L16 16" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="5" r="2" />
            <circle cx="6" cy="12" r="2" />
            <circle cx="18" cy="19" r="2" />
          </svg>
        </button>
      </div>

      <div className={styles.markerWrap} aria-label="Marcador de ubicación">
        <div className={styles.arrow}>➤</div>
        <div className={styles.marker}>
          <div className={styles.pulse}></div>
          <div className={styles.pin}></div>
        </div>
      </div>

      <section className={styles.card}>
        <h2>Fusagasugá, Cundinamarca</h2>
        <p>
          La ubicación se muestra como una demostración visual para la entrega.
          Encima del punto aparece una flecha para simular el seguimiento del dispositivo.
        </p>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Dispositivo conectado ahora
        </div>
      </section>
    </main>
  );
}
