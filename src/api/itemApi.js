import api from "./api";

export async function getFeatured() {
    return api.get('/meals?featured=true');
}

export async function getByCategory(catID) {
    return api.get(`/meals?categoryId=${catID}`);
}