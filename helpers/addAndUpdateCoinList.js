function addAndUpdateCoinList(coinList, coin) {
    const newCoin = coinList.find((item) => item.name === coin[0]);
    if (!newCoin) {
        coinList.push(new CreateCoin(coin[0], +coin[1], +coin[2]));
    } else {
        coinList.map((item) => {
            if (item.name === newCoin.name) {
                item.buy(+coin[1], +coin[2]);
            }
        });
    }
}
