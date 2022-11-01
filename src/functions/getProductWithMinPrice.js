export const getProductWithMinPrice = (array) =>
    array.reduce((acc, curr) => (acc.price <= curr.price ? acc : curr));
