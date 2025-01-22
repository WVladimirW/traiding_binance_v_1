const divEl = document.querySelector(".content__item");
const mainTitleEl = document.querySelector(".main__item");
const addCoinBtn = document.querySelector(".add-token__btn");
const deleteCoinBtn = document.querySelector(".delete-token__btn");

addCoinBtn.addEventListener("click", (e) => {
    const result = changeAddDeleteCoinListener(
        coinList,
        e,
        addAndUpdateCoinList
    );
    if (result) {
        setLocalStorage("coinList", coinList);
    }
});

deleteCoinBtn.addEventListener("click", (e) => {
    const result = changeAddDeleteCoinListener(
        coinList,
        e,
        deleteAndUpdateCoinList
    );
    if (result) {
        setLocalStorage("coinList", coinList);
    }
});

mainTitleEl.addEventListener("click", (e) => {
    const key = e.target.dataset.data || e.target.parentElement.dataset.data;
    let flagActiveClassSVG = false;
    flagActiveClassSVG = addCurrentClassSVG(e, key);
    sortData(coinList, key, flagActiveClassSVG);
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

extractLocalStorage(coinList);
updateCoinPrices(coinList).then(() => {
    getTotalCapital();
    DrawList(coinList, divEl);
});

/*
changes: remove titleList coin from drawList.js; changes some styles for titleList; add function toggle current class for titleList; add function sordData for titleList; remove duplication code; add localStorage; add validation for input
*/

/*
Добавить всплывающую кнопку удаления, при нажатии на строку с монетами
*/
