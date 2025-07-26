import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

const ButtonGroup = () => {
  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
    {
      text: "Reset",
      onClick: handleResetToInitial,
    },
    {
      text: "Remove all items",
      onClick: handleRemoveAllItems,
    },
  ];
  return (
    <div className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          onClick={button.onClick}
          buttonType="secondary"
          key={button.text}
        >
          {button.text}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
