import Button from "./Button";

const ButtonGroup = ({
  removeItems,
  resetItems,
  markItemsComplete,
  markItemsIncomplete,
}) => {
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markItemsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markItemsIncomplete,
    },
    {
      text: "Reset",
      onClick: resetItems,
    },
    {
      text: "Remove all items",
      onClick: removeItems,
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
