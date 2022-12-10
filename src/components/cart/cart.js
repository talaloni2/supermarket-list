import './cart.css'

import data from "../../common/data.json"
import { useEffect, useState } from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useLocation, useNavigate } from "react-router-dom";
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';

export default function Home() {
    let navigate = useNavigate();
    const cartId = localStorage.getItem("cartId");
    const [cart, setCart] = useState({ cartItems: [] });


    const onShoppingListClick = () => {
        navigate("/")
    }

    const updateCount = (item, count) => {
        setCart(currCart => {
            const selectedItem = currCart.cartItems.find(cartItem => cartItem.item.name === item.name);
            if (!selectedItem) {
                console.log("Error occured while searching item named: ", item.name);
                return currCart;
            }

            selectedItem.count = count;
            return { ...currCart };
        })
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


    const cost = calculateCost(cart);
    console.log(cart);
    return (
        <div>
            <AppBar
                title="Cart"
                buttonIcon=<ShoppingBagIcon />
                onButtonClick={onShoppingListClick}
                cost={cost}
            />
            {cart.cartItems.map((answer, i) => {
                return <ItemCard
                    key={i}
                    item={answer.item}
                    count={answer.count}
                    onAddClick={() => { }}
                    updateCount={updateCount}
                    enableSetCount
                />
            })}
            <Fab id={"apply_fab"} color="primary" aria-label="Apply cahnges" onClick={event => {
                onSaveCart(cart, navigate);
            }}>
                <CheckIcon />
            </Fab>

        </div>
    );
}

function calculateCost(cart) {
    return cart.cartItems.reduce(
        (accumulator, cartItem) => accumulator + (cartItem.item.price * cartItem.count),
        0
    );
}

async function onSaveCart(cart, navigate) {
    const cartId = localStorage.getItem("cartId");
    cart.cartItems = cart.cartItems.filter(cartItem => cartItem.count > 0);
    const savedCart = {
        cartId, cartItems: cart.cartItems
    }
    debugger;
    fetch("http://localhost:3002/cart", {
        method: "post", headers: { 'Content-Type': 'application/json' }, mode: 'cors',
        body: JSON.stringify(cart)
    })
        .then((Response) => Response.json())

    alert("Saved cart successfully");
    navigate("/")
}
