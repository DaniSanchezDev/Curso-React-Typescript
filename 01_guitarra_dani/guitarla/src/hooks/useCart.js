
import { useEffect, useState } from 'react';
import { db } from './../data/db';


const useCart = () => {
  
  const initialCart = () => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart 
      ? JSON.parse(localStorageCart) 
      : []
  }

  // Recomendada para archivos locales
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MIN_ITEMS = 1;
  const MAX_ITEMS = 5;

  useEffect(() =>{
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(item) {
    const itemExist = cart.findIndex(
      (guitarExist) => guitarExist.id === item.id
    );
    if (itemExist >= 0 ) {
      if(cart[itemExist].quantity >= MAX_ITEMS) return
      // existe en el carrito
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;

      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity > MIN_ITEMS){
        return{
        ...item,
        quantity: item.quantity - 1
        }
      }
      return item;
    })
    setCart(updatedCart)
  }

  function increaseQuantity(id){
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity < MAX_ITEMS) {
        return{
          ...item,
          quantity : item.quantity + 1
        }
      }
      return item;
    })
    setCart(updatedCart);
    
  }

  function cleanCart() {
    setCart([])
  }


  // State derivado
  const isEmpty = () => cart.length === 0
  const cartTotal = () => cart.reduce( (total, item,) => total + (item.quantity * item.price), 0)


  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
    cleanCart,
    isEmpty,
    cartTotal
  }
}

export default useCart

