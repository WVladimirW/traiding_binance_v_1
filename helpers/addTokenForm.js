const formEl = document.querySelector(".add-token__form");

function addTokenFromForm() {
    const res = [];
    const formEl = document.querySelector(".add-token__form");

    Array.from(formEl).forEach((item) => {
        if (item.tagName === "INPUT") {
            res.push(formatInputValue(item.value));
            console.log(item.value);
        }
    });

    Array.from(formEl).forEach((item) => (item.value = ""));
    return res;
}
