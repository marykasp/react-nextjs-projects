import { useItemsContext } from "../lib/hooks";

const Counter = () => {
  const { items } = useItemsContext();
  return (
    <p className="counter">
      <b>{items.filter((item) => item.packed).length}</b> / {items.length} items
      packed
    </p>
  );
};

export default Counter;
