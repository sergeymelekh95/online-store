export const countPrice = (price, discountPercentage) => {
    if (discountPercentage) {
        return price - (price * discountPercentage) / 100;
    }
};
