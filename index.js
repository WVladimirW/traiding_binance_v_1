const divEl = document.querySelector(".main__content");
const addCoinBtn = document.querySelector(".add-token__btn");
const deleteCoinBtn = document.querySelector(".delete-token__btn");

coinList.push(new CreateCoin("BTC", 1000, 1));
coinList.push(new CreateCoin("ETH", 2000, 1));

addCoinBtn.addEventListener("click", (e) => {
    const coinFromForm = addTokenFromForm();

    e.preventDefault();
    addAndUpdateCoinList(coinList, coinFromForm);
    updateCoinPrices(coinList).then(() => {
        getTotalCapital();
        DrawList(coinList, divEl);
    });
});

deleteCoinBtn.addEventListener("click", (e) => {
    const coinFromForm = addTokenFromForm();

    e.preventDefault();
    deleteAndUpdateCoinList(coinList, coinFromForm);
    updateCoinPrices(coinList).then(() => {
        getTotalCapital();
        DrawList(coinList, divEl);
    });
});

setInterval(() => {
    updateCoinPrices(coinList).then(() => {
        getTotalCapital();
        DrawList(coinList, divEl);
    });
}, 1000);

// убрать дублирование в листенерах
// сортировку по убыванию и возрастанию для каждой колонки
// поворот стрелки если сортировка идет
// добавить local storage
//
//
//
