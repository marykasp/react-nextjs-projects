const ItemList = ({ items, deleteItem, toggleItem }) => {
  return (
    <ul className="item-list">
      {/* iterate over todo items to display a list item */}
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          toggleItem={toggleItem}
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
