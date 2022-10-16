const BASE_URL = 'htts://dummyjson.com';

export const ALL_PRODUCTS = `${BASE_URL}/products`;

export const getProductsByCategory = (category) =>
    `${ALL_PRODUCTS}/category/${category}`;

export const getListOfCategories = `${ALL_PRODUCTS}/categories`;

export const getProductById = (id) => `${ALL_PRODUCTS}/${id}`;

export const searchProductByName = (name) => `${ALL_PRODUCTS}/search?q=${name}`;
