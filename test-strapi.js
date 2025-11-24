
const STRAPI_URL = "http://localhost:1337";
const STRAPI_TOKEN = "9af25d2edd08c259deb68054c6958cc179525473666faf69e107746f0a9891ed4995e7a45e91e351bee938ec653a381c7536d654bd2dd41672453062fe035c3f9d5001ad64e3026000fa16dc600a6a0972b9f45317206e2f85fff4a168550a5be0cf0eaf8810e4bb0b8ba48cfb1840ade4a9ce6a2bb35aa6c5389a00132419bf";

async function testConnection() {
    try {
        console.log(`Fetching from ${STRAPI_URL}/api/landing-page?populate=deep`);
        const res = await fetch(`${STRAPI_URL}/api/landing-page?populate=deep`, {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
        });

        if (!res.ok) {
            console.error(`Error: ${res.status} ${res.statusText}`);
            const text = await res.text();
            console.error(text);
            return;
        }

        const data = await res.json();
        console.log("Success!");
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

testConnection();
