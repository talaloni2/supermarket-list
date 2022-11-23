import Item from "./Item";

export default function Home() {
    let items = [
      {name: "water", price: "4", photo: "https://img.freepik.com/free-psd/plastic-water-bottle-mockup_439185-2468.jpg?w=2000"},
      {name: "bread", price: "20", photo: "https://www.theclevercarrot.com/wp-content/uploads/2013/12/sourdough-bread-round-1-of-1.jpg"},
      {name: "milk", price: "6.13", photo: "https://www.tnuva.co.il/uploads/f_606ee43fa87cf_1617880127.jpg"},
      {name: "eggs", price: "13", photo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Eierdoosmet10eierengevuld2010.jpg"},
    ]
    return (
      <div>
        {items.map((answer, i) => {
          return <Item key={i} name={answer.name} price={answer.price} photo={answer.photo}></Item>
        })}
        
      </div>
    );
  }