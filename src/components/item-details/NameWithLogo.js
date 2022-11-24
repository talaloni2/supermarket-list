import "./NameWithLogo.css"

export default function NameWithLogo(props) {
    let capitalizedName = props.name.charAt(0).toUpperCase() + props.name.slice(1);;
    return (
        <div className="nameWithLogo">
            <div className="name">{capitalizedName}</div>
            <img src={props.photo} alt=":(" height={100} width={100}/>
        </div>
    )
}