import api from "./api";

export async function getFeatured() {
    return api.get('/meals?featured=true');
}

export async function getByCategory(catID) {
    return api.get(`/meals?categoryId=${catID}`);
}

export async function getAll() {
    return api.get('/meals');
}

export async function getItemById(id) {
    return api.get(`/meals/${id}`);
}

export async function updateItem(itemId, updatedFields) {
    return api.patch(`/meals/${itemId}`, updatedFields);
}