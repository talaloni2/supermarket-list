import './ItemRow.css'

export default function ItemRow({ label, value }) {
    return (
        <div className="itemrow">
            <div className="itemrow-label">{label}</div>
            <div className="itemrow-value">{value}</div>
        </div>
    );
}