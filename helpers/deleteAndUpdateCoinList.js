function deleteAndUpdateCoinList(coinList, coin) {
    coinList.map((item) => {
        if (item.name === coin[0]) {
            item.sell(coin[2]);
        }
    });
}
