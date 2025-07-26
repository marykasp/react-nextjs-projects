const ItemList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <ul className="item-list">
      {items.length === 0 && <div>Empty</div>}
      {/* iterate over todo items to display a list item */}
      {items.map((item) => (
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
