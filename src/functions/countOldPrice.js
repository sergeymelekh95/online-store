export const countOldPrice = (price, discountPercentage) => {
    if (discountPercentage) {
        return price + (price * discountPercentage) / 100;
    }
};
