function sortData(array, key, flag) {
    return array.sort((a, b) => {
        const valueA = a[key];
        const valueB = b[key];

        if (typeof valueA === "string" && typeof valueB === "string") {
            return flag
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA);
        }
        if (typeof valueA === "number" && typeof valueB === "number") {
            return flag ? valueA - valueB : valueB - valueA;
        }
    });
}
