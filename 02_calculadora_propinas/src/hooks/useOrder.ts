import { useState } from "react";
import type { MenuItems, OrderItem } from "../types";

function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItems) => {
    
    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if(itemExist) {
      const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
       {...orderItem, quantity: orderItem.quantity + 1} : 
       orderItem
      )
      setOrder(updatedOrder)
    } else {
          const newItem : OrderItem = {...item, quantity: 1}
          setOrder([...order, newItem])
    }
    console.log(order);

  }
  const removeItem  = (id: MenuItems['id']) => {
    setOrder(order.filter(item => item.id !== id))
    
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
    
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  };
}

export default useOrder;
