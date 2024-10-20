import { data } from './data.js';
// Variables para los elementos del DOM
let seriesTbody = document.getElementById('series-tbody');
let promedioTemporadas = document.getElementById("season-average");
let tablaSeries = document.getElementById("series-table");
let tarjetaDetalles = document.getElementById("series-details");
let imgSerie = document.getElementById("series-img");
let tituloSerie = document.getElementById("series-title");
let descSerie = document.getElementById("series-desc");
let linkSerie = document.getElementById("series-link");
// Calcular y mostrar las series en la tabla
function mostrarSeries(series) {
    let totalSeasons = 0;
    series.forEach((serie) => {
        var _a;
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <th>${serie.id}</th>
            <td class="serie-nombre text-info" style="cursor: pointer;">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        // Agregar evento de clic a cada fila
        (_a = fila.querySelector(".serie-nombre")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => mostrarDetalle(serie));
        seriesTbody.appendChild(fila);
        totalSeasons += serie.seasons;
    });
    // Calcular promedio
    const promedio = (totalSeasons / series.length).toFixed(1);
    promedioTemporadas.innerText = `Seasons average: ${promedio}`;
}
function mostrarDetalle(serie) {
    tarjetaDetalles.style.display = "block";
    imgSerie.src = serie.image;
    imgSerie.alt = serie.name;
    tituloSerie.textContent = serie.name;
    descSerie.textContent = serie.description;
    linkSerie.href = serie.link; // Asegúrate de que siempre tenga un href válido
    linkSerie.textContent = "Ver más";
}
// Ejecutar la función para mostrar las series al cargar
mostrarSeries(data);
