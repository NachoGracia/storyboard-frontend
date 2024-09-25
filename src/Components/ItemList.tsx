import axios from "axios";
import { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const itemsList = await axios.get("http://localhost:8000/api/items/");

      setItems(itemsList.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.name} : {item.description}
        </p>
      ))}
    </div>
  );
};

export default ItemList;
