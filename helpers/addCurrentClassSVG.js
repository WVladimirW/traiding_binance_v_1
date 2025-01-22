function addCurrentClassSVG(e, key) {
    if (e.target.classList.contains("main__item")) return false;

    if (e.target.dataset.data === key) {
        const itemlistTitles = Array.from(
            e.target.parentElement.parentElement.children
        );
        const currentSVG = e.target.children[0];
        removeClassSVG(itemlistTitles, currentSVG);
        e.target.classList.add("item__title--checked");
        return currentSVG.classList.toggle("item__svg--turned");
    } else {
        const itemlistTitles = Array.from(
            e.target.parentElement.parentElement.parentElement.children
        );
        const currentSVG = e.target;
        removeClassSVG(itemlistTitles, currentSVG);
        e.target.parentElement.classList.add("item__title--checked");
        return currentSVG.classList.toggle("item__svg--turned");
    }
}

function removeClassSVG(arr, currentSVG) {
    arr.map((item) => {
        if (item.children[0].children[0] !== currentSVG) {
            item.children[0].children[0].classList.remove("item__svg--turned");
        }
        if (item.children[0] !== currentSVG) {
            item.children[0].classList.remove("item__title--checked");
        }
    });
}
