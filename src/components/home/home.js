import './home.css'

import data from "../../common/data.json"
import {useState} from "react";
import ItemCard from '../../common/item-card/item-card'
import AppBar from '../../common/app-bar/app-bar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();

    const [cart, setCart] = useState([]);

    const onAddClick = item => {
        setCart(currCart => {
            console.log([item, ...currCart])
            return [item, ...currCart]
        })
    };

    const onCartClick = () => {
      navigate("cart")
    }

    return (
        <div>
            <AppBar
                title="Shopping List"
                buttonIcon=<ShoppingCartIcon/>
                onButtonClick={onCartClick}
            />
            {Object.values(data).map((answer, i) => {
                return <ItemCard
                    key={i}
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
