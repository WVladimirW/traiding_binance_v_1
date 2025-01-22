async function updateCoinPrices(coins) {
    const prices = await fetchPrices();

    prices.forEach(({ symbol, price }) => {
        const coin = coins.find((c) => c.symbol === symbol);
        if (coin) {
            coin.updatePrice(parseFloat(price));
        }
    });
}
