export const featuredItems = (array, idsArray) => {
    return array.filter((item) =>
        idsArray.includes(item.id)
    )
};

export const getItemsByCategory = (categoryId, menuArray) => menuArray.filter((item) => item.categoryId === categoryId);