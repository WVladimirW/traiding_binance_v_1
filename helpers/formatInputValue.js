function formatInputValue(inputValue) {
    const formattedValue = inputValue.replace(/\s+/g, "").replace(/,/g, ".");
    const numericValue = parseFloat(formattedValue);
    // потом добавить обработчик ошибок, если isNaN
    return isNaN(numericValue) ? inputValue : numericValue;
}
