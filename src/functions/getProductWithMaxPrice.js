export const getProductWithMaxPrice = (array) =>
    array.reduce((acc, curr) => (acc.price >= curr.price ? acc : curr));
