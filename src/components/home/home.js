import './home.css'

import data from "../../common/data.json"
import { useState } from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const [cart, setCart] = useState({});

  const onAddClick = item => {
    setCart(currCart => {
      let cartItem = currCart[item.id] || { item, count: 0 };
      cartItem.count += 1;
      currCart[item.id] = cartItem;
      console.log(currCart);
      return currCart;
    })
  };

  const onCartClick = () => {
    fetch("http://localhost:3000/cart", {
      method: "post", headers: { 'Content-Type': 'application/json' }, mode: 'cors',
      body: JSON.stringify(cart)
    })
      .then((Response) => Response.json())
       
    navigate("cart")
  }

  return (
    <div>
      <AppBar
        title="Products"
        buttonIcon=<ShoppingCartIcon />
        onButtonClick={onCartClick}
      />
      {Object.values(data).map((answer, i) => {
        return <ItemCard
          key={i}
          id={answer.id}
          name={answer.name}
          price={answer.price}
          photo={answer.photo}
          description={answer.description}
          enableAdding
          onAddClick={onAddClick}
        />
      })}
    </div>
  );
}
