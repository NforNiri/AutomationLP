
const STRAPI_URL = "http://localhost:1337";

async function testConnection() {
    try {
        console.log(`Fetching from ${STRAPI_URL}/api/landing-page`);
        const res = await fetch(`${STRAPI_URL}/api/landing-page`);

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
