import EmptyView from "./EmptyView";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "default", label: "Sort by default" },
  { value: "packed", label: "Sort by packed" },
  { value: "unpacked", label: "Sort by unpacked" },
];
const ItemList = ({ items, onDeleteItem, onToggleItem }) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    // return a negative or positive number - if postive a will become before b
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }

    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    // default sorting - does not change the order of the list
    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            options={options}
            defaultValue={options[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}
      {/* iterate over todo items to display a list item */}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={onDeleteItem}
          toggleItem={onToggleItem}
        />
      ))}
    </ul>
  );
};

const Item = ({ item, deleteItem, toggleItem }) => {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;
