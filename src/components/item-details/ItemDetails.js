import { useParams } from "react-router-dom";
import data from "../data.json"
import NameWithLogo from "./NameWithLogo";
import "./ItemDetails.css"

export default function ItemDetails() {
    let { itemId } = useParams();
    let item = data[itemId];
    return (
    <div className="itemdetails-detailsCard">
        <NameWithLogo name={item.name} photo={item.photo}></NameWithLogo>
        <div className="itemdetails-row"><div className="itemdetails-label">Price:</div><div className="itemdetails-price">{item.price} ILS</div></div>
        <div className="itemdetails-row"><div className="itemdetails-label">Description:</div><div className="itemdetails-description">{item.description}</div></div>
        <div className="itemdetails-row"><div className="itemdetails-label">Availability:</div><div className="itemdetails-availability">{item.availableIn}</div></div>
        <img className="itemdetails-extraImage" src={item.extraImageUrl} alt=":("/>
    </div>
    )
}