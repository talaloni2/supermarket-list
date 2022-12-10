import './cart.css'

import data from "../../common/data.json"
import { useEffect, useState } from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    const cartId = localStorage.getItem("cartId");
    // const cartId = "12345";
    const [cart, setCart] = useState({cartItems: []});

    const onShoppingListClick = () => {
        navigate("/")
    }

    useEffect(() => {
        fetch("http://localhost:3002/cart/" + cartId, {
            method: "get", headers: { 'Content-Type': 'application/json' }, mode: 'cors'
        })
            .then(Response => {
                if (!Response.ok) {
                    return { cartId, cartItems: [] };
                }
                return Response.json();
            })
            .then(response => setCart(response))
            .catch((err) => console.log(err))
    }, [cartId]
    );

    console.log(cart);
    return (
        <div>
            <AppBar
                title="Cart"
                buttonIcon=<ShoppingBagIcon/>
                onButtonClick={onShoppingListClick}
            />
            {cart.cartItems.map((answer, i) => {
                return <ItemCard
                    key={i}
                    item={answer.item}
                    count={answer.count}
                    onAddClick={() => {}}
                />
            })}

        </div>
    );
}


async function onSaveCart(cart, navigate) {
    const cartId = localStorage.getItem("cartId");
    const savedCart = {
        cartId, cartItems: cart
      }
      fetch("http://localhost:3002/cart", {
        method: "post", headers: { 'Content-Type': 'application/json' }, mode: 'cors',
        body: JSON.stringify(cart)
      })
        .then((Response) => Response.json())

      navigate("cart")
}
