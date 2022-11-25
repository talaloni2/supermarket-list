import "./ItemDescription.css"

function ItemDescription(props) {

    return (
        <div className="description">
            <div className="name">{props.name}</div>
            <div className="price">{props.price}</div>
        </div>
    )
}

export default ItemDescription;