import "./Item.css"
import ItemDescription from "./ItemDescription.js"
import { useNavigate } from 'react-router-dom';



function Item(props) {
    let navigate = useNavigate();
    const onItemClick = () => {
        navigate("/item/"+props.name);
    }

    return (
        <div className="item" onClick={onItemClick}>
            <ItemDescription name={props.name} price={props.price}/>
            <img className="image-with-frame" src={props.photo} alt=":(" height={100} width={100}></img>
        </div>
    )
}

export default Item