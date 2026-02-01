import { useMemo, useState } from "react";
import { CartContext } from "./CartContext";

export default function CartPtovider({children}) {
    const [itemsState, setItemsState] = useState([]);

    const totalCount = useMemo(() => { //useMemo e излишен шум, но го използвам с учебна цел. Правилно се използва при тежки изчисления
        return itemsState.reduce((acc, item) => acc + item.quantity, 0);
    }, [itemsState]);

    const totalPrice = useMemo(() => {
        return itemsState.reduce((acc, item) => acc + item.meal.price * item.quantity, 0);
    }, [itemsState]);

    const addToCart = (meal, quantity = 1) => {
        setItemsState((oldState) => {
            const existingIndex = oldState.findIndex((item) => {
                return item.meal.id === meal.id;
            });
            if (existingIndex !== -1) {
                return oldState.map((item, i) => i === existingIndex ? {...item, quantity: item.quantity + quantity}: item);
            };
            return [...oldState, {meal, quantity}];
        });
    };

    const increaseQuantity = (index) => {
        setItemsState((oldstate) => {
            return oldstate.map((item, i) => i === index ? {...item, quantity: item.quantity + 1} : item);
        });
    };

    const decreaseQuantity = (index) => {
        setItemsState((oldstate) => {
            return oldstate.map((item, i) => i === index && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item);
        });
    };

    const removeItem = (index) => {
        setItemsState((oldState) => {
            return oldState.filter((_, i) => i !== index); // _ показва че итъм не се използва
        });
    };

    const clearCart = () => {
        setItemsState([]);
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