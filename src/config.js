const BASE_URL = 'https://dummyjson.com';

export const ALL_PRODUCTS = `${BASE_URL}/products`;

export const getProductsByCategory = (category) =>
    `${ALL_PRODUCTS}/category/${category}`;

export const getListOfCategories = `${ALL_PRODUCTS}/categories`;

export const getProductById = (id) => `${ALL_PRODUCTS}/${id}`;

export const searchProductsByKeyword = (name) => `${ALL_PRODUCTS}/search?q=${name}`;
