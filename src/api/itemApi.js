import api from "./api";

export async function getFeatured() {
    return api.get('/meals?featured=true');
}