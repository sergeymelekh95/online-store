export const countPrice = (price, discountPercentage, minDiscountPercentage) =>
    discountPercentage > minDiscountPercentage
        ? price - (price * discountPercentage) / 100
        : price;