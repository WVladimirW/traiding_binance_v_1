async function fetchPrices() {
    try {
        const response = await fetch(
            "https://api.binance.com/api/v3/ticker/price"
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch prices:", error);
        return [];
    }
}
