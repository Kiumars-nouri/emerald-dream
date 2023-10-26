"use client"

import React, {createContext, useState} from "react";

export const CartContext = createContext(null)

function Cartprovider({children}){
    const [cartItem, setCartItem] = useState("1")
return (
<CartContext.Provider value={{cartItem, setCartItem}}>
 {children}
</CartContext.Provider>
);
}

export default Cartprovider