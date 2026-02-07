export const featuredItems = (array, idsArray) => {
    return array.filter((item) =>
        idsArray.includes(item.id)
    )
};

export const getItemsByCategory = (categoryId, menuArray) => menuArray.filter((item) => item.categoryId === categoryId);

export const getItemById = (id, menuArray) => menuArray.find((item) => item.id === id);

export const changeItemPicture = (id, menuArray, imageUri) => {
    const item = getItemById(id, menuArray);
    if (item) {
        item.imageUrl = imageUri;
    };
    return item
}