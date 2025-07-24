import { useState } from "react";
import { initialItems } from "../lib/constants";

const ItemList = () => {
  const [items, setItems] = useState(initialItems);

  return (
    <ul className="item-list">
      {/* iterate over todo items to display a list item */}
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button>❌</button>
    </li>
  );
};

export default ItemList;
