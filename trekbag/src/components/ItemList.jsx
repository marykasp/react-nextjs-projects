const ItemList = ({ items, deleteItem }) => {
  return (
    <ul className="item-list">
      {/* iterate over todo items to display a list item */}
      {items.map((item) => (
        <Item key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  );
};

const Item = ({ item, deleteItem }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>

      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;
