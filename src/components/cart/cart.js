import './cart.css'

import data from "../../common/data.json"
import {useState} from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    const onShoppingListClick = () => {
      navigate("/")
    }

    return (
        <div>
            <AppBar
                title="Cart"
                buttonIcon=<ShoppingBagIcon/>
                onButtonClick={onShoppingListClick}
            />
            {Object.values(data).map((answer, i) => {
                return <ItemCard
                    key={i}
                    name={answer.name}
                    price={answer.price}
                    photo={answer.photo}
                    description={answer.description}
                    onAddClick={() => {}}
                />
            })}

        </div>
    );
}
