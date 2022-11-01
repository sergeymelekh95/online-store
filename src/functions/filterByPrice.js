export const filterByPrice = (array, price) =>
    array.filter((el) => el.price >= price[0] && el.price <= price[1]);
