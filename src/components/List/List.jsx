import "./List.css";
import ListItem from "./ListItem/ListItem";

const List = ({ data }) => {

  console.log("List data: ", data);

  return (
    <div className="list-wrap">
      {data.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
