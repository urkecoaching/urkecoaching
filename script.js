async function getIpAndLocation() {
            try {
                // Pozivanje API-ja za dobijanje informacija o IP adresi
                const response = await fetch('https://ipinfo.io/json?token=f26747fef8b2ee');
                const data = await response.json();

                // Prikaz podataka
                document.getElementById("info").textContent = `
                    Vaša IP adresa: ${data.ip}
                    Lokacija: ${data.city}, ${data.region}, ${data.country}
                    Koordinate: ${data.loc}
                `;
            } catch (error) {
                console.error("Greška prilikom dobijanja podataka:", error);
                document.getElementById("info").textContent = "Nije moguće dohvatiti podatke o IP adresi i lokaciji.";
            }
        }

        getIpAndLocation();
