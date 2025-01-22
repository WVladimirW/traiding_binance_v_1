function extractLocalStorage(coinList) {
    if (!localStorage.getItem("coinList")) return;

    coinList.length = 0;
    const storedCoinList = JSON.parse(localStorage.getItem("coinList"));
    const newCoinList = storedCoinList.map((item) =>
        Object.setPrototypeOf(item, CreateCoin.prototype)
    );
    coinList.push(...newCoinList);
}

function setLocalStorage(key, array) {
    const item = JSON.stringify(array);
    localStorage.setItem(key, item);
}
