const detailContainer = document.getElementById('weather-detail');
const denNazev = decodeURIComponent(window.location.hash.substring(1));

const denData = predpoved.find(den => den.den === denNazev);

if (denData) {
    detailContainer.innerHTML = `
        <h2>${denData.den} (${denData.datum})</h2>
        <p><strong>Ranní teplota:</strong> ${denData.ranni_teplota} °C</p>
        <p><strong>Denní teplota:</strong> ${denData.denni_teplota} °C</p>
        <p><strong>Odpolední teplota:</strong> ${denData.odpoledni_teplota} °C</p>
        <p><strong>Večerní teplota:</strong> ${denData.vecerni_teplota} °C</p>
        <p><strong>Stav:</strong> ${denData.stav_pocasi}</p>
        <p><strong>Tlak:</strong> ${denData.tlak} hPa</p>
        <p><strong>Rychlost větru:</strong> ${denData.rychlost_vetru} km/h</p>
        <p>${denData.popis_pocasi}</p>
    `;
} else {
    detailContainer.innerHTML = `<p>Detail pro tento den nebyl nalezen.</p>`;
}
