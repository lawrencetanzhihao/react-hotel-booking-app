import "./ListItem.css";

const ListItem = ({ item: { photo, name, price, address, rating } }) => {

  console.log("ListItem:", photo, name, price, address, rating); 
  
  return (
    <div className="listItem-wrap">
      <img src={photo} alt="" />
      <header>
        <h4>{name}</h4>
        <span>🌟{rating}</span>
      </header>
      <footer>
        <p>
          <span>{address}</span>
        </p>
        <p>
          <b>${price}</b>
        </p>
      </footer>
    </div>
  );
};

export default ListItem;
