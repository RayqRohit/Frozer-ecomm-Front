import React from "react";
import all_product from "../components/Assets/all_product";


export const ShopContext = React.createContext(null);

const getDefaultCart = ()=>{
    let cart = {}
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0
    }

    return cart
}

// now create a provider for the context

const ShopContextProvider = (props) => {



      // use state to keep the cart items
      const [cartItems, setCartItems] = React.useState(getDefaultCart())


   

    

   


    // add to cart function
    const addToCart = (id) => {
        setCartItems((prev)=>({
            ...prev,
            [id]: prev[id]+1
        }))


        console.log(cartItems);
    }


    // remove from cart function
    const removeFromCart = (id) => {
        setCartItems((prev)=>({
            ...prev,
            [id]: prev[id]-1
        }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => {
                    return product.id === Number(item);
                });
    
                if (itemInfo) { // Check if a product was found
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
    
        return totalAmount; // Move this line outside the loop to return the total amount after all items are processed
    }


    const getTotalCartItems = ()=>{
        let totalItems = 0;

        for(const item in cartItems){
           if(cartItems[item]>0){
               totalItems += cartItems[item]
           }
        }

        return totalItems;
    }

    const contextValue = {

        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems

    }


  
 


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;