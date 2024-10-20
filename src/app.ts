import { data } from './data.js';
import { Serie } from './Serie.js';

// Variables para los elementos del DOM
let seriesTbody = document.getElementById('series-tbody') as HTMLElement;
let promedioTemporadas = document.getElementById("season-average") as HTMLElement;
let tablaSeries = document.getElementById("series-table") as HTMLElement;
let tarjetaDetalles = document.getElementById("series-details") as HTMLElement;
let imgSerie = document.getElementById("series-img") as HTMLImageElement;
let tituloSerie = document.getElementById("series-title") as HTMLElement;
let descSerie = document.getElementById("series-desc") as HTMLElement;
let linkSerie = document.getElementById("series-link") as HTMLAnchorElement;

// Calcular y mostrar las series en la tabla
function mostrarSeries(series: Serie[]): void {
    let totalSeasons = 0;
    series.forEach((serie) => {
        let fila = document.createElement("tr");
        fila.innerHTML = `
            <th>${serie.id}</th>
            <td class="serie-nombre text-info" style="cursor: pointer;">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        // Agregar evento de clic a cada fila
        fila.querySelector(".serie-nombre")?.addEventListener('click', () => mostrarDetalle(serie));
        seriesTbody.appendChild(fila);
        totalSeasons += serie.seasons;
    });

    // Calcular promedio
    const promedio = (totalSeasons / series.length).toFixed(1);
    promedioTemporadas.innerText = `Seasons average: ${promedio}`;
}


function mostrarDetalle(serie: Serie): void {
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
