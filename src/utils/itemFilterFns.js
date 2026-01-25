export const featuredItems = (array, idsArray) => {
    return array.filter((item) =>
        idsArray.includes(item.id)
    )
};