import perro from "../assets/perro.jpg";
import juan from "../assets/juan.jpg";
import lucas from "../assets/lucas.jpg";
import felipe from "../assets/felipe.jpg";

export const users = [

  // =========================================
  // CUENTA QUE COMPARTE GPS
  // =========================================

  {
    id: 1,

    email: "ljesar7@gmail.com",

    password: "123456",

    role: "tracker",

    devices: [

      {
        id: 1,
        name: "Jesar",
        image: perro,
        location: "Compartiendo ubicación",
        status: "GPS activo",
        map: "/mapa",
      },

      {
        id: 2,
        name: "Lucas",
        image: lucas,
        location: "Fusagasugá",
        status: "Conectado",
        map: "/mapa",
      },

    ],
  },

  // =========================================
  // CUENTA QUE VE EL MAPA
  // =========================================

  {
    id: 2,

    email: "proyectojesgab@gmail.com",

    password: "123456",

    role: "viewer",

    devices: [

      {
        id: 1,
        name: "Panel principal",
        image: juan,
        location: "Monitoreo",
        status: "Observando ubicación",
        map: "/mapa2",
      },

      {
        id: 2,
        name: "Felipe",
        image: felipe,
        location: "Panel web",
        status: "Conectado",
        map: "/mapa",
      },

    ],
  },

];