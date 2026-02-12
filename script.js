// --- VARIABLES GLOBALES ---
const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('search-input');
const listaPlaylistsElement = document.querySelector('.playlist-list');
const filterContainer = document.getElementById('filter-container');
const btnLimpiar = document.getElementById('btn-limpiar-filtros');

// Estado
let etiquetasSeleccionadas = []; 
let misListas = JSON.parse(localStorage.getItem('misListas')) || {
    '🔥 Jugando': [],
    '✅ Terminados': [],
    '❤️ Favoritos': []
};

// --- INICIO ---
document.addEventListener('DOMContentLoaded', () => {
    activarNavegacionMenu();
    generarFiltrosDinamicamente(); 
    renderizarMenuLateral();
    cargarVistaInicio(); 
});

// --- LISTAS DEL SIDEBAR (DISEÑO CUADRADITO) ---
function renderizarMenuLateral() {
    listaPlaylistsElement.innerHTML = '';
    const nombresListas = Object.keys(misListas);

    if (nombresListas.length === 0) {
        listaPlaylistsElement.innerHTML = '<p style="font-size:12px; color:#555; padding:10px;">Crea una lista (+)</p>';
        return;
    }

    nombresListas.forEach(nombreLista => {
        const cantidad = misListas[nombreLista].length;
        // Generamos el color solo para el cuadrado
        const degradado = generarGradiente(nombreLista);

        const li = document.createElement('li');
        li.className = 'playlist-item';
        
        // Evento click en la lista (evita el botón de borrar)
        li.onclick = (e) => {
            if(e.target.closest('.btn-delete-list')) return;
            cargarVistaLista(nombreLista);
        };

        li.innerHTML = `
            <div class="playlist-cover" style="background: ${degradado};"></div>
            <div class="playlist-info">
                <div class="playlist-name">${nombreLista}</div>
                <div class="playlist-count">${cantidad} juegos</div>
            </div>
            <button class="btn-delete-list" onclick="borrarLista('${nombreLista}')" title="Borrar">🗑️</button>
        `;
        listaPlaylistsElement.appendChild(li);
    });
}

// --- GENERADOR DE DEGRADADOS ---
function generarGradiente(texto) {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) { hash = texto.charCodeAt(i) + ((hash << 5) - hash); }
    const colores = ['#ff0055', '#00ff99', '#5500ff', '#ffaa00', '#00ccff', '#ff00cc', '#aa00ff', '#ffff00'];
    const color1 = colores[Math.abs(hash) % colores.length];
    const color2 = colores[Math.abs(hash >> 1) % colores.length];
    return `linear-gradient(135deg, ${color1}, ${color2})`;
}

// --- CREAR Y BORRAR LISTAS ---
window.crearNuevaLista = function() {
    const nombre = prompt("Nombre de la nueva lista:");
    if (nombre && nombre.trim() !== "") {
        if (misListas[nombre]) { alert("Esa lista ya existe."); return; }
        misListas[nombre] = [];
        guardarYRenderizar();
    }
};

window.borrarLista = function(nombreLista) {
    if(confirm(`¿Borrar "${nombreLista}" para siempre?`)) {
        delete misListas[nombreLista];
        guardarYRenderizar();
        cargarVistaInicio(); // Si borras la lista que ves, vuelve a inicio
    }
};

function guardarYRenderizar() {
    localStorage.setItem('misListas', JSON.stringify(misListas));
    renderizarMenuLateral();
}

// --- VISTA CONTENIDO DE LISTA ---
function cargarVistaLista(nombreLista) {
    document.querySelector('.main-view').scrollTo({ top: 0, behavior: 'smooth' });
    const juegosEnLista = misListas[nombreLista];
    const colorFondo = generarGradiente(nombreLista);

    contentArea.innerHTML = `
        <div class="back-link" onclick="cargarVistaInicio()">
            <span>❮</span> Volver
        </div>

        <div style="background: ${colorFondo}; padding: 3rem 2rem; border-radius: 8px 8px 0 0; margin-bottom: 20px; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position:relative; padding-top: 5rem;">
            <h5 style="text-transform:uppercase; letter-spacing:2px; opacity:0.9;">COLECCIÓN</h5>
            <h1 style="font-size: 3.5rem; margin: 10px 0;">${nombreLista}</h1>
            <p>${juegosEnLista.length} títulos</p>
        </div>

        <div style="padding: 0 2rem;">
            <div class="shelf-row" id="lista-contenido" style="flex-wrap: wrap; gap: 20px;"></div>
        </div>
    `;

    const contenedor = document.getElementById('lista-contenido');
    if (juegosEnLista.length === 0) {
        contenedor.innerHTML = '<p style="color:#777; width:100%; text-align:center; padding:20px;">Lista vacía. ¡Añade juegos!</p>';
        return;
    }

    juegosEnLista.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        const idParaDetalle = parseInt(item.id); 
        card.innerHTML = `
            <div class="card-img" onclick="cargarDetalleJuego(${idParaDetalle})">
                <img src="${item.imagen}" alt="${item.titulo}">
            </div>
            <div class="card-body"><h4>${item.titulo}</h4></div>
            <button class="btn-remove-game" onclick="eliminarJuegoDeLista('${nombreLista}', ${item.id})" title="Quitar">✕</button>
        `;
        contenedor.appendChild(card);
    });
}

window.eliminarJuegoDeLista = function(nombreLista, idJuego) {
    if(!confirm("¿Quitar de la lista?")) return;
    misListas[nombreLista] = misListas[nombreLista].filter(j => j.id != idJuego);
    guardarYRenderizar();
    cargarVistaLista(nombreLista);
};

// --- ETIQUETAS Y FILTROS ---
function generarFiltrosDinamicamente() {
    const todasLasTags = dbJuegos.flatMap(juego => juego.tags);
    const tagsUnicas = [...new Set(todasLasTags)].sort();
    filterContainer.innerHTML = '';
    tagsUnicas.forEach(tag => {
        const btn = document.createElement('div');
        btn.classList.add('tag-btn');
        btn.innerText = tag;
        btn.onclick = () => alternarEtiqueta(tag, btn);
        filterContainer.appendChild(btn);
    });
}

function alternarEtiqueta(tag, btnElement) {
    if (etiquetasSeleccionadas.includes(tag)) {
        etiquetasSeleccionadas = etiquetasSeleccionadas.filter(t => t !== tag);
        btnElement.classList.remove('active');
    } else {
        etiquetasSeleccionadas.push(tag);
        btnElement.classList.add('active');
    }
    btnLimpiar.style.display = etiquetasSeleccionadas.length > 0 ? 'block' : 'none';
    aplicarFiltros();
}

btnLimpiar.addEventListener('click', () => {
    etiquetasSeleccionadas = [];
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    btnLimpiar.style.display = 'none';
    cargarVistaInicio();
});

// --- MOTOR DE FILTRADO POR ETIQUETAS ---
function aplicarFiltros() {
    if (etiquetasSeleccionadas.length === 0) {
        cargarVistaInicio();
        return;
    }

    const resultados = dbJuegos.filter(juego => {
        return etiquetasSeleccionadas.every(tagSeleccionada => 
            juego.tags.includes(tagSeleccionada)
        );
    });

    contentArea.innerHTML = `
        <div class="back-link" onclick="limpiarFiltrosYVolver()">
            <span>✕</span> Limpiar Filtros
        </div>

        <div style="padding: 2rem; padding-top: 4rem;">
            <h2>Explorando: <span style="color:#66c0f4">${etiquetasSeleccionadas.join(' + ')}</span></h2>
            <p style="color:#777; margin-bottom: 20px;">${resultados.length} juegos encontrados</p>
            <div class="shelf-row" id="filter-results" style="flex-wrap: wrap; gap: 20px;"></div>
        </div>
    `;

    renderizarFila(resultados, 'filter-results');
}

// Helper para limpiar filtros desde el botón de volver
function limpiarFiltrosYVolver() {
    etiquetasSeleccionadas = [];
    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
    btnLimpiar.style.display = 'none';
    cargarVistaInicio();
}

// --- BUSCADOR DE TEXTO ---
searchInput.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    
    // Si borras todo, vuelve al inicio o a los filtros
    if(texto.trim() === '') {
        if(etiquetasSeleccionadas.length > 0) aplicarFiltros();
        else cargarVistaInicio();
        return;
    }

    const resultados = dbJuegos.filter(j => 
        j.titulo.toLowerCase().includes(texto) || 
        j.desarrollador.toLowerCase().includes(texto)
    );

    contentArea.innerHTML = `
        <div class="back-link" onclick="limpiarBuscadorYVolver()">
            <span>✕</span> Cancelar Búsqueda
        </div>

        <div style="padding: 2rem; padding-top: 4rem;">
            <h2>Resultados para: "<span style="color:#66c0f4">${e.target.value}</span>"</h2>
            <p style="color:#777; margin-bottom: 20px;">${resultados.length} coincidencias</p>
            <div class="shelf-row" id="text-results" style="flex-wrap: wrap; gap: 20px;"></div>
        </div>
    `;
    
    renderizarFila(resultados, 'text-results');
});

// Helper para limpiar el input cuando das a volver
function limpiarBuscadorYVolver() {
    searchInput.value = '';
    cargarVistaInicio();
}

// --- RENDERIZADO GENERAL ---
function renderizarFila(listaJuegos, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    if (!contenedor) return;
    contenedor.innerHTML = '';
    if (listaJuegos.length === 0) { contenedor.innerHTML = '<p style="color:#777;">Sin resultados.</p>'; return; }
    listaJuegos.forEach(juego => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => cargarDetalleJuego(juego.id);
        card.innerHTML = `<div class="card-img"><img src="${juego.poster}" loading="lazy"></div><div class="card-body"><h4>${juego.titulo}</h4><p>${juego.desarrollador}</p></div>`;
        contenedor.appendChild(card);
    });
}

// --- VISTA INICIO ---
// --- VISTA INICIO (HOME) ---
function cargarVistaInicio() {
    // Marcamos activo el botón de Inicio en el menú
    actualizarBotonMenu('Inicio');

    contentArea.innerHTML = `
        <section class="shelf">
            <div class="shelf-header">
                <h2>🔥 Tendencias Globales</h2>
                <a href="#" class="see-all" onclick="cargarVistaTendencias()">Ver todo</a>
            </div>
            <div class="shelf-row" id="row-trending"></div>
        </section>

        <section class="shelf">
            <div class="shelf-header">
                <h2>📚 Sagas Legendarias</h2>
                <a href="#" class="see-all" onclick="cargarVistaSeccionCompleta('Sagas Legendarias', 'sagas')">Ver colecciones</a>
            </div>
            <div class="shelf-row" id="row-sagas"></div>
        </section>

        <section class="shelf">
            <div class="shelf-header">
                <h2>🏢 Estudios Favoritos</h2>
                <a href="#" class="see-all" onclick="cargarVistaSeccionCompleta('Estudios', 'companies')">Ver todos</a>
            </div>
            <div class="shelf-row" id="row-companies"></div>
        </section>

        <section class="shelf">
            <div class="shelf-header">
                <h2>🕹️ Joyas Atemporales</h2>
                <a href="#" class="see-all" onclick="cargarVistaSeccionCompleta('Clásicos Retro', 'retro')">Explorar historia</a>
            </div>
            <div class="shelf-row" id="row-retro"></div>
        </section>
    `;

    // Llenamos las filas (limitamos a 5-6 elementos para el Home)
    renderizarFila(dbJuegos.slice(0, 6), 'row-trending'); 
    
    // Retro (IDs 700+)
    const retroGames = dbJuegos.filter(j => j.id >= 700).slice(0, 6);
    renderizarFila(retroGames, 'row-retro');

    // Sagas y Compañías (Igual que antes, limitando un poco si quisieras)
    const rowSagas = document.getElementById('row-sagas');
    dbSagas.slice(0, 5).forEach(saga => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.onclick = () => filtrarPorSaga(saga.nombre);
        card.innerHTML = `<div class="card-img"><img src="${saga.imagen}"></div><div class="card-body"><h4>${saga.nombre}</h4></div>`;
        rowSagas.appendChild(card);
    });

    const rowComp = document.getElementById('row-companies');
    dbCompanias.slice(0, 5).forEach(comp => {
        const card = document.createElement('div');
        card.className = 'card circle-style';
        card.onclick = () => filtrarPorSaga(comp.nombre);
        card.innerHTML = `<div class="card-img"><img src="${comp.imagen}" style="background:${comp.fondo}; padding:10px;"></div><div class="card-body"><h4>${comp.nombre}</h4></div>`;
        rowComp.appendChild(card);
    });
}

// --- DETALLE JUEGO ---
function cargarDetalleJuego(idJuego) {
    const juego = dbJuegos.find(j => j.id === idJuego);
    if (!juego) return;
    document.querySelector('.main-view').scrollTo({ top: 0, behavior: 'smooth' });
    contentArea.innerHTML = `
        <button onclick="cargarVistaInicio()" style="position:absolute; top:20px; left:20px; z-index:10; background:rgba(0,0,0,0.5); border:1px solid white; color:white; padding: 5px 15px; cursor:pointer; border-radius:4px;">← Volver</button>
        <div class="game-hero" style="background-image: url('${juego.hero}');">
            <div class="hero-content">
                <img src="${juego.poster}" class="hero-poster">
                <div class="hero-info">
                    <span class="hero-type">VIDEOJUEGO • ${juego.plataformas.join(' / ')}</span>
                    <h1 class="hero-title">${juego.titulo}</h1>
                    <div class="hero-meta"><span class="tag">🏢 ${juego.desarrollador}</span><span class="tag">⭐ ${juego.nota}</span><span class="tag">📅 ${juego.fecha}</span></div>
                    <div class="action-buttons"><button class="btn-steam" onclick="abrirModalGuardar('${juego.titulo}', '${juego.poster}', '${juego.id}')">Añadir a Biblioteca</button></div>
                    <div style="margin-top:15px; display:flex; gap:5px; flex-wrap:wrap;">${juego.tags.map(t => `<span style="background:#2a2a2a; color:#aaa; border:1px solid #3d3d3f; padding:2px 6px; font-size:11px; border-radius:2px;">${t}</span>`).join('')}</div>
                </div>
            </div>
        </div>
        <div style="padding: 0 2rem;">
            <h3>Sinopsis</h3><p class="game-description">${juego.sinopsis}</p>
            <section class="shelf"><div class="shelf-header"><h2>Más de ${juego.desarrollador}</h2></div><div class="shelf-row" id="row-dev"></div></section>
        </div>
    `;
    const otros = dbJuegos.filter(j => j.desarrollador === juego.desarrollador && j.id !== juego.id);
    renderizarFila(otros, 'row-dev');
}

// --- UTILS ---
// --- UTILS ---
function activarNavegacionMenu() {
    const botonesMenu = document.querySelectorAll('.nav-menu li');
    
    botonesMenu.forEach(boton => {
        boton.addEventListener('click', () => {
            // 1. Quitar clase active de todos
            botonesMenu.forEach(b => b.classList.remove('active'));
            // 2. Poner clase active al que has clicado
            boton.classList.add('active');
            
            // Nota: La navegación real (cargarVistaInicio) ya está en el onclick del HTML
        });
    });
}

// --- VISTA TENDENCIAS (PÁGINA DEDICADA) ---
function cargarVistaTendencias() {
    document.querySelector('.main-view').scrollTo({ top: 0, behavior: 'smooth' });

    // Filtramos los mejores
    const tendencias = dbJuegos.filter(j => j.id < 600).sort((a, b) => b.nota - a.nota);

    contentArea.innerHTML = `
        <div class="back-link" onclick="cargarVistaInicio()">
            <span>❮</span> Inicio
        </div>

        <div style="background: linear-gradient(135deg, #ff0055 0%, #ffaa00 100%); padding: 3rem 2rem; border-radius: 8px 8px 0 0; margin-bottom: 20px; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position:relative; padding-top: 5rem;">
            <h5 style="text-transform:uppercase; letter-spacing:2px; opacity:0.9;">LO MÁS JUGADO</h5>
            <h1 style="font-size: 3.5rem; margin: 10px 0;">Tendencias Globales</h1>
            <p>Los títulos más populares del momento</p>
        </div>

        <div style="padding: 0 2rem;">
            <div class="shelf-row" id="full-trending" style="flex-wrap: wrap; gap: 20px; overflow: visible;"></div>
        </div>
    `;

    renderizarFila(tendencias, 'full-trending');
}

// --- VISTA SECCIÓN COMPLETA (VER TODO) ---
function cargarVistaSeccionCompleta(titulo, tipo) {
    document.querySelector('.main-view').scrollTo({ top: 0, behavior: 'smooth' });

    let headerColor = 'linear-gradient(135deg, #444 0%, #111 100%)';
    if(tipo === 'retro') headerColor = 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)';
    if(tipo === 'companies') headerColor = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)';

    contentArea.innerHTML = `
        <div class="back-link" onclick="cargarVistaInicio()">
            <span>❮</span> Inicio
        </div>

        <div style="background: ${headerColor}; padding: 3rem 2rem; border-radius: 8px 8px 0 0; margin-bottom: 20px; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position:relative; padding-top: 5rem;">
            <h5 style="text-transform:uppercase; letter-spacing:2px; opacity:0.9;">EXPLORAR</h5>
            <h1 style="font-size: 3rem; margin: 10px 0;">${titulo}</h1>
        </div>

        <div style="padding: 0 2rem;">
            <div class="shelf-row" id="full-section-content" style="flex-wrap: wrap; gap: 20px; overflow: visible;"></div>
        </div>
    `;

    const contenedor = document.getElementById('full-section-content');

    if (tipo === 'retro') {
        const retroGames = dbJuegos.filter(j => j.id >= 700);
        renderizarFila(retroGames, 'full-section-content');
    } 
    else if (tipo === 'sagas') {
        dbSagas.forEach(saga => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.onclick = () => filtrarPorSaga(saga.nombre);
            card.innerHTML = `<div class="card-img"><img src="${saga.imagen}"></div><div class="card-body"><h4>${saga.nombre}</h4></div>`;
            contenedor.appendChild(card);
        });
    } 
    else if (tipo === 'companies') {
        dbCompanias.forEach(comp => {
            const card = document.createElement('div');
            card.className = 'card circle-style';
            card.onclick = () => filtrarPorSaga(comp.nombre);
            card.innerHTML = `<div class="card-img"><img src="${comp.imagen}" style="background:${comp.fondo}; padding:10px;"></div><div class="card-body"><h4>${comp.nombre}</h4></div>`;
            contenedor.appendChild(card);
        });
    }
}

// Helper para actualizar la clase 'active' del menú
function actualizarBotonMenu(nombreBoton) {
    const botones = document.querySelectorAll('.nav-menu li');
    botones.forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.includes(nombreBoton)) {
            btn.classList.add('active');
        }
    });
}

// --- VISTA DETALLE DE SAGA / EMPRESA ---
function filtrarPorSaga(texto) {
    // Scroll suave arriba
    document.querySelector('.main-view').scrollTo({ top: 0, behavior: 'smooth' });

    // Filtramos los juegos
    const resultados = dbJuegos.filter(j => 
        j.titulo.includes(texto) || 
        j.desarrollador.includes(texto) || 
        j.tags.includes(`Saga: ${texto}`)
    );

    // Color de fondo elegante para el encabezado
    const colorFondo = 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'; 

    contentArea.innerHTML = `
        <div class="back-link" onclick="cargarVistaInicio()">
            <span>❮</span> Inicio
        </div>

        <div style="background: ${colorFondo}; padding: 3rem 2rem; border-radius: 8px 8px 0 0; margin-bottom: 20px; color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.5); position:relative; padding-top: 5rem;">
            <h5 style="text-transform:uppercase; letter-spacing:2px; opacity:0.9;">COLECCIÓN</h5>
            <h1 style="font-size: 3.5rem; margin: 10px 0;">${texto}</h1>
            <p>${resultados.length} títulos encontrados</p>
        </div>

        <div style="padding: 0 2rem;">
            <div class="shelf-row" id="col-res" style="flex-wrap:wrap; gap:20px"></div>
        </div>
    `;

    renderizarFila(resultados, 'col-res');
}

window.abrirModalGuardar = function(titulo, imagen, id) {
    const listas = Object.keys(misListas);
    const destino = prompt(`Añadir "${titulo}" a:\n${listas.join(', ')}`);
    if (misListas[destino]) {
        if(misListas[destino].some(j => j.id === id)) { alert("¡Ya lo tienes!"); return; }
        misListas[destino].push({ titulo, imagen, id });
        localStorage.setItem('misListas', JSON.stringify(misListas));
        renderizarMenuLateral();
        alert("✅ Añadido");
    }
};
window.toggleFiltros = function() {
    const c = document.getElementById('filter-container');
    const h = document.querySelector('.filters-header');
    if (c.style.display === 'none') { c.style.display = 'flex'; h.classList.remove('filters-collapsed'); }
    else { c.style.display = 'none'; h.classList.add('filters-collapsed'); }
};