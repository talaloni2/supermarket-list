import { useParams } from "react-router-dom";
import data from "../../common/data.json"
import ItemHeader from "./item-header/ItemHeader";
import "./ItemDetails.css"
import ItemRow from "./item-row/ItemRow";

export default function ItemDetails() {
    let { itemId } = useParams();
    let item = data[itemId];
    return (
    <div className="itemdetails-detailsCard">
        <ItemHeader name={item.name} photo={item.photo}></ItemHeader>

        <ItemRow label="Price:" value={("" + item.price) + " ILS"}/>
        <ItemRow label="Description:" value={item.description}/>
        <ItemRow label="Availability:" value={item.availableIn}/>
        <img className="itemdetails-extraImage" src={item.extraImageUrl} alt=":("/>
    </div>
    )
}