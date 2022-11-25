import { useParams } from "react-router-dom";
import data from "../data.json"
import NameWithLogo from "./NameWithLogo";
import "./ItemDetails.css"
import ItemRow from "./ItemRow";

export default function ItemDetails() {
    let { itemId } = useParams();
    let item = data[itemId];
    return (
    <div className="itemdetails-detailsCard">
        <NameWithLogo name={item.name} photo={item.photo}></NameWithLogo>

        <ItemRow label="Price:" value={("" + item.price) + " ILS"}/>
        <ItemRow label="Description:" value={item.description}/>
        <ItemRow label="Availability:" value={item.availableIn}/>
        <img className="itemdetails-extraImage" src={item.extraImageUrl} alt=":("/>
    </div>
    )
}