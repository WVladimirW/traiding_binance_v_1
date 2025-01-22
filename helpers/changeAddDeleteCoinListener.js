function changeAddDeleteCoinListener(coinList, e, callback) {
    const coinFromForm = addTokenFromForm();
    if (!coinFromForm[0]) return;

    e.preventDefault();
    callback(coinList, coinFromForm);
    updateCoinPrices(coinList).then(() => {
        getTotalCapital();
        DrawList(coinList, divEl);
    });
    return true;
}
