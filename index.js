const container = document.getElementById('weather-overview');

predpoved.forEach(den => {
    const karta = document.createElement('div');
    karta.className = 'weather-card';
    karta.innerHTML = `
        <h2>${den.den} (${den.datum})</h2>
        <p>Teplota: ${den.denni_teplota} °C</p>
        <p>Stav: ${den.stav_pocasi}</p>
        <a href="detail.html#${den.den}">Zobrazit detail</a>
    `;
    container.appendChild(karta);
});
