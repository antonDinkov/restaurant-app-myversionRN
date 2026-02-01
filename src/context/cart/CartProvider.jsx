import { useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartPtovider({children}) {
    const [itemsState, setItemsState] = useState([]);

    const totalCount = useMemo(() => { //useMemo e излишен шум, но го използвам с учебна цел. Правилно се използва при тежки изчисления
        itemsState.reduce((acc, item) => acc + item.quantity, 0);
    }, [itemsState]);

    const totalPrice = useMemo(() => {
        itemsState.reduce((acc, item) => acc + item.meals.price, 0);
    }, [itemsState]);

    const addToCart = (meal, quantity = 1) => {
        setItemsState((oldState) => {
            const existingIndex = oldState.findIndex((item) => {
                item.id === meal.id;
            });
            if (existingIndex !== -1) {
                return oldState.map((item, i) => i === existingIndex ? {...item, quantity: item.quantity + quantity}: item);
            };
            return [...oldState, {meal, quantity}];
        });
    };

    const increaseQuantity = (index) => {

    };

    const decreaseQuantity = (index) => {

    };

    const removeItem = (index) => {

    };

    const clearCart = () => {

    };

    const data = {
        itemsState,
        totalCount,
        totalPrice,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        clearCart,
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}