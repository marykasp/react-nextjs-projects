import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButtons = ({ type, setCount }) => {
  const handleClick = (e) => {
    setCount((prevCount) => {
      if (type === "minus") {
        const newCount = prevCount - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      } else {
        const newCount = prevCount + 1;
        if (newCount > 5) {
          return 5;
        }

        return newCount;
      }
    });

    e.currentTarget.blur();
  };
  return (
    <button className="count-btn" onClick={handleClick}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
};

export default CountButtons;
