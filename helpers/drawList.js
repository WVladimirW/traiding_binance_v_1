function DrawList(coinList, element) {
    element.innerHTML = ``;

    coinList.map((item) => {
        if (item.name && item.buyPrice && item.coinCount) {
            const colorize = item.getProfit() > 0 ? "green" : "red";
            const totalInvested = formatNumberWithSpaces(
                item.totalInvested().toFixed(2)
            );
            const countCoin = formatNumberWithSpaces(
                +item.coinCount.toFixed(8)
            );
            const buyPrice = formatNumberWithSpaces(+item.buyPrice.toFixed(8));
            const price = formatNumberWithSpaces(+item.price.toFixed(8));
            const profit = formatNumberWithSpaces(+item.getProfit().toFixed(2));
            const profitPercent = formatNumberWithSpaces(
                +item.getProfitInPercents().toFixed(2)
            );
            const capital = formatNumberWithSpaces(
                +item.portfolioValue().toFixed(2)
            );
            const capitalPercent = formatNumberWithSpaces(
                ((+item.portfolioValue() / totalCapital) * 100).toFixed(1)
            );

            element.innerHTML += `
            <div class="item">
                <div class="item__total-invested">${totalInvested}</div>
                <div class="item__coin">${item.name}</div>
                <div class="item__count-coin">${countCoin}</div>
                <div class="item__average-price">${buyPrice}</div>
                <div class="item__price-market">${price}</div>
                <div class="item__profit ${colorize}">${profit}</div>
                <div class="item__profit-percents ${colorize}">${profitPercent}%</div>
                <div class="item__total-value">${capital}</div>
                <div class="item__capital-percent">${capitalPercent}%</div>
            </div>
        `;
        }
    });
}
