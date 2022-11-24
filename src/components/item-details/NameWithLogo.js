import data from "../data.json"
import "./NameWithLogo.css"

export default function NameWithLogo(props) {
    return (
        <div className="nameWithLogo">
            <div className="name">{props.name}</div>
            <img src={props.photo} alt=":(" height={100} width={100}/>
        </div>
    )
}