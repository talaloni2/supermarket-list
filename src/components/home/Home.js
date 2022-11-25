import Item from "./item/Item";
import data from "../../common/data.json"

export default function Home() {
    return (
      <div>
        {Object.values(data).map((answer, i) => {
          return <Item key={i} name={answer.name} price={answer.price} photo={answer.photo}></Item>
        })}
        
      </div>
    );
  }