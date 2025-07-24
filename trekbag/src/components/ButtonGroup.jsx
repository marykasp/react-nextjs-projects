import Button from "./Button";

const secondaryButtons = [
  "Mark all as complete",
  "Mark all as incomplete",
  "Reset",
  "Remove all items",
];

const ButtonGroup = () => {
  return (
    <div className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button type="secondary" key={buttonText}>
          {buttonText}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
