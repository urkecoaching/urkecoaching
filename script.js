 async function getData() {
            try {
                const response = await fetch('https://ipinfo.io/json?token=f26747fef8b2ee');
                const data = await response.json();
                document.getElementById("info").textContent = `
                    Vaša IP adresa: ${data.ip}
                    Lokacija: ${data.city}, ${data.region}, ${data.country}
                    Koordinate: ${data.loc}
                `;
            } catch (error) {
                console.error("Error:", error);
                document.getElementById("info").textContent = "Can't get info.";
            }
        }

