// SIMULACIÓN DE BASE DE DATOS MONGODB
// En el futuro, esto se importará en MongoDB Compass.

const dbJuegos = [
    // ==========================================
    // BLOQUE 100: NINTENDO (La Magia)
    // ==========================================
    {
        id: 101,
        titulo: "The Legend of Zelda: Breath of the Wild",
        desarrollador: "Nintendo",
        tags: ["Aventura", "Mundo Abierto", "RPG", "Saga: Zelda"],
        fecha: "2017",
        plataformas: ["Switch", "Wii U"],
        poster: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        hero: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
        sinopsis: "Entra en un mundo de descubrimientos, exploración y aventura en The Legend of Zelda: Breath of the Wild, un juego que rompe los esquemas de la aclamada serie.",
        nota: 9.8
    },
    {
        id: 102,
        titulo: "Super Mario Odyssey",
        desarrollador: "Nintendo",
        tags: ["Plataformas", "3D", "Familia", "Saga: Mario"],
        fecha: "2017",
        plataformas: ["Switch"],
        poster: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/s/super-mario-odyssey-switch/hero",
        hero: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/s/super-mario-odyssey-switch/hero",
        sinopsis: "Acompaña a Mario en una enorme aventura en 3D por todo el planeta usando sus nuevas habilidades para rescatar a la princesa Peach de los planes de boda de Bowser.",
        nota: 9.7
    },
    {
        id: 103,
        titulo: "Metroid Dread",
        desarrollador: "MercurySteam",
        tags: ["Acción", "Metroidvania", "Ciencia Ficción"],
        fecha: "2021",
        plataformas: ["Switch"],
        poster: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/m/metroid-dread-switch/hero",
        hero: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/m/metroid-dread-switch/hero",
        sinopsis: "Únete a la cazarrecompensas Samus Aran mientras escapa de un mortífero mundo alienígena plagado de amenazas mecánicas.",
        nota: 8.9
    },
    {
        id: 104,
        titulo: "Animal Crossing: New Horizons",
        desarrollador: "Nintendo",
        tags: ["Simulación", "Social", "Relajante"],
        fecha: "2020",
        plataformas: ["Switch"],
        poster: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/a/animal-crossing-new-horizons-switch/hero",
        hero: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/es_LA/games/switch/a/animal-crossing-new-horizons-switch/hero",
        sinopsis: "Escapa a una isla desierta y crea tu propio paraíso mientras exploras, creas y personalizas en el juego Animal Crossing: New Horizons.",
        nota: 9.0
    },

    // ==========================================
    // BLOQUE 200: PLAYSTATION (Narrativa Épica)
    // ==========================================
    {
        id: 201,
        titulo: "God of War Ragnarök",
        desarrollador: "Santa Monica Studio",
        tags: ["Acción", "Aventura", "Mitología", "Saga: God of War"],
        fecha: "2022",
        plataformas: ["PS5", "PS4"],
        poster: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        hero: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/6zG7X63073087083087.png",
        sinopsis: "El Fimbulvetr está en marcha. Kratos y Atreus deben viajar a cada uno de los nueve reinos en busca de respuestas mientras las fuerzas asgardianas se preparan para la batalla.",
        nota: 9.4
    },
    {
        id: 202,
        titulo: "The Last of Us Part I",
        desarrollador: "Naughty Dog",
        tags: ["Terror", "Narrativa", "Acción", "Saga: The Last of Us"],
        fecha: "2022",
        plataformas: ["PS5", "PC"],
        poster: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEILY9McYlae2F9595905905.png",
        hero: "https://gmedia.playstation.com/is/image/SIEPDC/the-last-of-us-part-i-hero-banner-desktop-01-en-18may22?$1600px$",
        sinopsis: "En una civilización devastada, donde los infectados y los supervivientes campan a sus anchas, Joel, el protagonista, recibe el encargo de sacar a la joven Ellie de una zona de cuarentena militar.",
        nota: 9.6
    },
    {
        id: 203,
        titulo: "Marvel's Spider-Man 2",
        desarrollador: "Insomniac Games",
        tags: ["Acción", "Superhéroes", "Mundo Abierto"],
        fecha: "2023",
        plataformas: ["PS5"],
        poster: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537d9e.png",
        hero: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/20563ea309b69165d21b33390c5a3d0781708573489828d1.png",
        sinopsis: "Los Spider-Men, Peter Parker y Miles Morales, regresan para una nueva y emocionante aventura de la aclamada franquicia Marvel's Spider-Man.",
        nota: 9.1
    },
    {
        id: 204,
        titulo: "Horizon Forbidden West",
        desarrollador: "Guerrilla Games",
        tags: ["RPG", "Mundo Abierto", "Ciencia Ficción"],
        fecha: "2022",
        plataformas: ["PS5", "PS4", "PC"],
        poster: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/HO8vkO9pfXhwbHi5WKDUEoNJ.png",
        hero: "https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/70a221f737526362d8562725515233157540248a8511476d.png",
        sinopsis: "Únete a Aloy mientras se aventura en el Oeste Prohibido, una frontera majestuosa aunque peligrosa que oculta misteriosas amenazas nuevas.",
        nota: 8.8
    },

    // ==========================================
    // BLOQUE 300: SHOOTERS & ACCIÓN (PC/Xbox)
    // ==========================================
    {
        id: 301,
        titulo: "Halo Infinite",
        desarrollador: "343 Industries",
        tags: ["FPS", "Ciencia Ficción", "Multijugador", "Saga: Halo"],
        fecha: "2021",
        plataformas: ["Xbox", "PC"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/library_hero.jpg",
        sinopsis: "Cuando toda esperanza se pierde y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para enfrentarse al enemigo más despiadado que jamás haya enfrentado.",
        nota: 8.7
    },
    {
        id: 302,
        titulo: "DOOM Eternal",
        desarrollador: "id Software",
        tags: ["FPS", "Acción", "Violento"],
        fecha: "2020",
        plataformas: ["PC", "PS5", "Xbox", "Switch"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/782330/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/782330/library_hero.jpg",
        sinopsis: "Los ejércitos del infierno han invadido la Tierra. Conviértete en el Slayer en una campaña épica para un jugador y cruza dimensiones aniquilando demonios.",
        nota: 9.3
    },
    {
        id: 303,
        titulo: "Call of Duty: Modern Warfare III",
        desarrollador: "Sledgehammer Games",
        tags: ["FPS", "Guerra", "Multijugador", "Saga: Call of Duty"],
        fecha: "2023",
        plataformas: ["PC", "PS5", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/2519060/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/2519060/library_hero.jpg",
        sinopsis: "En la secuela directa del récord Modern Warfare II, el Capitán Price y la Fuerza Operativa 141 se enfrentan a la amenaza definitiva.",
        nota: 7.5
    },

    // ==========================================
    // BLOQUE 400: RPG OCCIDENTAL & MUNDO ABIERTO
    // ==========================================
    {
        id: 401,
        titulo: "Elden Ring",
        desarrollador: "FromSoftware",
        tags: ["RPG", "Souls-like", "Mundo Abierto", "Fantasía Oscura"],
        fecha: "2022",
        plataformas: ["PC", "PS5", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_hero.jpg",
        sinopsis: "Álzate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.",
        nota: 9.6
    },
    {
        id: 402,
        titulo: "The Witcher 3: Wild Hunt",
        desarrollador: "CD Projekt Red",
        tags: ["RPG", "Fantasía", "Historia Rica"],
        fecha: "2015",
        plataformas: ["PC", "PS5", "Xbox", "Switch"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/292030/library_hero.jpg",
        sinopsis: "Eres Geralt de Rivia, cazador de monstruos. Delante de ti se extiende un continente infestado de monstruos y devastado por la guerra que podrás explorar a tu antojo.",
        nota: 9.8
    },
    {
        id: 403,
        titulo: "Red Dead Redemption 2",
        desarrollador: "Rockstar Games",
        tags: ["Acción", "Oeste", "Historia", "Mundo Abierto"],
        fecha: "2018",
        plataformas: ["PC", "PS4", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/library_hero.jpg",
        sinopsis: "Estados Unidos, 1899. Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales pisándoles los talones, la banda debe robar, robar y luchar.",
        nota: 9.9
    },
    {
        id: 404,
        titulo: "Cyberpunk 2077",
        desarrollador: "CD Projekt Red",
        tags: ["Futurista", "RPG", "FPS", "Cyberpunk"],
        fecha: "2020",
        plataformas: ["PC", "PS5", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/library_hero.jpg",
        sinopsis: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal.",
        nota: 8.9
    },

    // ==========================================
    // BLOQUE 500: JRPGs y ANIME
    // ==========================================
    {
        id: 501,
        titulo: "Final Fantasy VII Remake",
        desarrollador: "Square Enix",
        tags: ["JRPG", "Acción", "Saga: Final Fantasy"],
        fecha: "2020",
        plataformas: ["PS5", "PC"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/library_hero.jpg",
        sinopsis: "El mundo ha caído bajo el dominio de la Compañía de Electricidad Shinra. Cloud Strife, un exmiembro de la unidad de élite SOLDADO convertido en mercenario, presta su ayuda al grupo de resistencia Avalancha.",
        nota: 9.0
    },
    {
        id: 502,
        titulo: "Persona 5 Royal",
        desarrollador: "Atlus",
        tags: ["JRPG", "Social", "Anime", "Turnos"],
        fecha: "2020",
        plataformas: ["PS5", "PC", "Switch", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1687950/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1687950/library_hero.jpg",
        sinopsis: "Ponte la máscara del Joker y únete a los Ladrones Fantasma de Corazones. Libérate de las cadenas de la sociedad moderna y realiza grandes asaltos para infiltrarte en la mente de los corruptos.",
        nota: 9.5
    },
    {
        id: 503,
        titulo: "NieR: Automata",
        desarrollador: "PlatinumGames",
        tags: ["Acción", "RPG", "Filosófico"],
        fecha: "2017",
        plataformas: ["PC", "PS4", "Xbox", "Switch"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/524220/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/524220/library_hero.jpg",
        sinopsis: "NieR: Automata narra la historia de los androides 2B, 9S y A2 y su batalla para recuperar la distopía dirigida por máquinas invadida por poderosas máquinas.",
        nota: 9.2
    },

    // ==========================================
    // BLOQUE 600: INDIES & JOYAS
    // ==========================================
    {
        id: 601,
        titulo: "Hollow Knight",
        desarrollador: "Team Cherry",
        tags: ["Indie", "Metroidvania", "Difícil"],
        fecha: "2017",
        plataformas: ["PC", "Switch", "PS4"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/367520/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/367520/library_hero.jpg",
        sinopsis: "¡Forja tu propio camino en Hollow Knight! Una aventura de acción clásica en 2D a través de un vasto mundo interconectado. Explora cavernas tortuosas y ciudades antiguas.",
        nota: 9.7
    },
    {
        id: 602,
        titulo: "Hades",
        desarrollador: "Supergiant Games",
        tags: ["Indie", "Roguelike", "Acción"],
        fecha: "2020",
        plataformas: ["PC", "Switch", "PS5"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1145360/library_hero.jpg",
        sinopsis: "Desafía al dios de los muertos mientras te abres paso a hachazos y golpes para salir del Inframundo en este roguelike de los creadores de Bastion.",
        nota: 9.5
    },
    {
        id: 603,
        titulo: "Stardew Valley",
        desarrollador: "ConcernedApe",
        tags: ["Indie", "Granja", "Relajante"],
        fecha: "2016",
        plataformas: ["PC", "Switch", "PS4", "Móvil"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/413150/library_hero.jpg",
        sinopsis: "Acabas de heredar la vieja parcela de tu abuelo en Stardew Valley. Armado con herramientas de segunda mano y unas pocas monedas, te dispones a comenzar tu nueva vida.",
        nota: 9.6
    },

    // ==========================================
    // BLOQUE 700: RETRO & CLÁSICOS
    // ==========================================
    {
        id: 701,
        titulo: "Half-Life 2",
        desarrollador: "Valve",
        tags: ["FPS", "Clásico", "Ciencia Ficción"],
        fecha: "2004",
        plataformas: ["PC"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/220/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/220/library_hero.jpg",
        sinopsis: "1998. HALF-LIFE supone un impacto en la industria de juegos con su combinación de acción frenética y narración continua y absorbente.",
        nota: 9.7
    },
    {
        id: 702,
        titulo: "Portal 2",
        desarrollador: "Valve",
        tags: ["Puzle", "Cooperativo", "Humor"],
        fecha: "2011",
        plataformas: ["PC", "Switch"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/620/library_hero.jpg",
        sinopsis: "La 'Iniciativa de Pruebas Perpetuas' se ha ampliado para permitirte diseñar puzles cooperativos para ti y tus amigos.",
        nota: 9.9
    },
    {
        id: 703,
        titulo: "Grand Theft Auto: San Andreas",
        desarrollador: "Rockstar Games",
        tags: ["Mundo Abierto", "Acción", "Clásico"],
        fecha: "2004",
        plataformas: ["PC", "PS2", "Xbox"],
        poster: "https://cdn.akamai.steamstatic.com/steam/apps/1547000/library_600x900.jpg",
        hero: "https://cdn.akamai.steamstatic.com/steam/apps/1547000/library_hero.jpg",
        sinopsis: "Hace cinco años, Carl Johnson dejó atrás su vida en Los Santos, San Andreas, una ciudad consumida por las bandas callejeras, las drogas y la corrupción.",
        nota: 9.5
    }
];

// --- SAGAS (Colecciones) ---
const dbSagas = [
    { nombre: "The Legend of Zelda", imagen: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero" },
    { nombre: "Resident Evil", imagen: "https://cdn.akamai.steamstatic.com/steam/apps/883710/library_600x900.jpg" },
    { nombre: "Final Fantasy", imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1462040/library_600x900.jpg" },
    { nombre: "God of War", imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" },
    { nombre: "Halo", imagen: "https://cdn.akamai.steamstatic.com/steam/apps/1240440/library_600x900.jpg" },
    { nombre: "Mario", imagen: "https://assets.nintendo.com/image/upload/ar_2:3,c_pad,dpr_2.625,f_auto,q_auto,w_400/b_white/ncom/es_LA/games/switch/s/super-mario-odyssey-switch/hero" }
];

// --- COMPAÑÍAS ---
const dbCompanias = [
    { nombre: "Nintendo", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1024px-Nintendo.svg.png", fondo: "white" },
    { nombre: "PlayStation", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png", fondo: "white" },
    { nombre: "Xbox", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png", fondo: "white" },
    { nombre: "Rockstar Games", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Rockstar_Games_Logo.svg/1200px-Rockstar_Games_Logo.svg.png", fondo: "black" },
    { nombre: "Valve", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/1200px-Valve_logo.svg.png", fondo: "#333" },
    { nombre: "FromSoftware", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/FromSoftware_logo.svg/1200px-FromSoftware_logo.svg.png", fondo: "black" }
];