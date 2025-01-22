function DrawList(coinList, element) {
    const svg = `
    <svg 
        class="item__svg"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 320 512" 
        width="12px" 
        height="12px" 
        style="fill:rgb(255, 255, 255); opacity: 0.8; stroke: #000000; stroke-width: 1px;">
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
    </svg>
`;

    element.innerHTML = `
        <div class="main__item">
            <div class="item__total-invested main__item--title">
            <span class="item__title">Investment</span>
            ${svg}
            </div>
            <div class="item__coin main__item--title">
            <span class="item__title">Name</span>
            ${svg}
            </div>
            <div class="item__count-coin main__item--title">
            <span class="item__title">Count</span>
            ${svg}
            </div>
            <div class="item__average-price main__item--title">
            <span class="item__title">Average</span>
            ${svg}
            </div>
            <div class="item__price-market main__item--title">
            <span class="item__title">Price</span>
            ${svg}
            </div>
            <div class="item__profit main__item--title">
            <span class="item__title">Profit</span>
            ${svg}
            </div>
            <div class="item__profit-percents main__item--title">
            <span class="item__title">Profit, %</span>
            ${svg}
            </div>
            <div class="item__total-value main__item--title">
            <span class="item__title">Total</span>
            ${svg}
            </div>
            <div class="item__capital-percent main__item--title">
            <span class="item__title">Share, %</span>
            ${svg}
            </div>
        </div>
    `;

    coinList.map((item) => {
        if (item.name && item.buyPrice && item.coinCount) {
            const colorize = item.getProfit() > 0 ? "green" : "red";
            const totalInvested = formatNumberWithSpaces(item.totalInvested());
            const countCoin = formatNumberWithSpaces(+item.coinCount);
            const buyPrice = formatNumberWithSpaces(+item.buyPrice);
            const price = formatNumberWithSpaces(item.price);
            const profit = formatNumberWithSpaces(+item.getProfit().toFixed(8));
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
