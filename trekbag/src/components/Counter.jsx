const Counter = ({ totalNumberOfItems, numberItemsPacked }) => {
  return (
    <p className="counter">
      <b>{numberItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
};

export default Counter;
