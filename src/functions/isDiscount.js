export const isDiscount = (discountPercentage, minValueForDiscountPersentage) =>
    discountPercentage > minValueForDiscountPersentage ? true : false;