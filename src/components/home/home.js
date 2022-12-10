import './home.css'

// import data from "../../common/data.json"
import { useEffect, useState } from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);

  const onAddClick = item => {
    setCart(currCart => {
      let cartItem = currCart.cartItems.find(cartItem => cartItem.item.name === item.name);
      if (cartItem === undefined){
        cartItem = {count: 0, item};
        currCart.cartItems.push(cartItem);
      }
      cartItem.count += 1;
      console.log(currCart);
      return currCart;
    })
  };

  const onCartClick = () => {
    const savedCart = {
      cartId, cartItems: cart
    }
    fetch("http://localhost:3000/cart", {
      method: "post", headers: { 'Content-Type': 'application/json' }, mode: 'cors',
      body: JSON.stringify(cart)
    })
      .then((Response) => Response.json())

    navigate("cart")
  }

  const cartId = localStorage.getItem("cartId");
  useEffect(() => {
    populateCart(cartId, setCart);
  }, [cartId]
  );

  useEffect(() => {
    populateProducts(setProducts);
  }, []
  );

  return (
    <div>
      <AppBar
        title="Products"
        buttonIcon=<ShoppingCartIcon />
        onButtonClick={onCartClick}
      />
      {Object.values(products).map((answer, i) => {
        return <ItemCard
          key={i}
          id={answer.id}
          name={answer.name}
          price={answer.price}
          photo={answer.photo}
          count={0}
          description={answer.description}
          enableAdding
          onAddClick={onAddClick}
        />
      })}
    </div>
  );
}


function populateCart(cartId, setCart) {
  fetch("http://localhost:3000/cart/" + cartId, {
    method: "get", headers: { 'Content-Type': 'application/json' }, mode: 'cors'
  })
    .then(Response => {
      if (!Response.ok) {
        return { cartId, cartItems: [] };
      }
      return Response.json();
    })
    .then(response => setCart(response))
    .catch((err) => console.log(err));
}


function populateProducts(setProducts) {
  fetch("http://localhost:3000/products", {
    method: "get", headers: { 'Content-Type': 'application/json' }, mode: 'cors'
  })
    .then(Response => {
      if (!Response.ok) {
        return [];
      }
      return Response.json();
    })
    .then(response => setProducts(response))
    .catch((err) => console.log(err));
}

