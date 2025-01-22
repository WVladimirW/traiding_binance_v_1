const coinList = [];

let totalCapital = null;

function getTotalCapital() {
    totalCapital = coinList.reduce(
        (acc, item) => acc + item.portfolioValue(),
        0
    );
}
