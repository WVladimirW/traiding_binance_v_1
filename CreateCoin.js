class CreateCoin {
    // используется когда впервые добавляем монету. После будет все занулено и не будет
    // отображаться в списке монет
    constructor(name, buyPrice, coinCount) {
        this.name = name;
        this.buyPrice = buyPrice;
        this.coinCount = coinCount;
        this.price = buyPrice;
        this.totalInvest = this.buyPrice * this.coinCount;
        this.totalCapital = this.price * this.coinCount;
        this.profit =
            this.price * this.coinCount - this.buyPrice * this.coinCount;
        this.profitInPercents =
            ((this.price - this.buyPrice) / this.buyPrice) * 100;
    }

    get symbol() {
        return `${this.name}USDT`;
    }

    updatePrice(newPrice) {
        // добавить валидацию
        this.price = newPrice;
    }
    // update buyPrice если совершили покупку
    buy(newPrice, quantity) {
        if (quantity <= 0 || newPrice <= 0) {
            console.error(
                "Invalid purchase: price and quantity must be positive."
            );
            return;
        }

        const totalValue = this.buyPrice * this.coinCount + newPrice * quantity;
        this.coinCount += quantity;
        this.buyPrice = totalValue / this.coinCount;
    }
    // update buyPrice если совершили продажу. Кол-во монет уменьшаем, но цена
    // остается прежней, т.к. это стоимость оставшихся монет
    sell(quantity) {
        if (quantity <= 0) {
            console.error("Invalid sale: quantity must be positive.");
            return;
        }

        if (quantity > this.coinCount) {
            console.error("Insufficient coins to sell.");
            return;
        }

        this.coinCount -= quantity;
    }

    portfolioValue() {
        // можно закешировать, если цена не изменялась
        this.totalCapital = this.price * this.coinCount;
        return this.totalCapital;
    }

    totalInvested() {
        this.totalInvest = this.buyPrice * this.coinCount;
        return this.totalInvest;
    }

    getProfit() {
        this.profit =
            this.price * this.coinCount - this.buyPrice * this.coinCount;
        return this.profit;
    }

    getProfitInPercents() {
        this.profitInPercents =
            ((this.price - this.buyPrice) / this.buyPrice) * 100;
        return this.profitInPercents;
    }
}
