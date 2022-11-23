import { useParams } from "react-router-dom";
import data from "./data.json"

export default function ItemDetails() {
    let { itemId } = useParams();
    return <div>{data[itemId].description}</div>
}