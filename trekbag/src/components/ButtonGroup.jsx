import Button from "./Button";

const ButtonGroup = ({ removeItems, resetItems, markItemsComplete }) => {
  return (
    <div className="button-group">
      <Button buttonType="secondary" onClick={markItemsComplete}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
      <Button buttonType="secondary" onClick={resetItems}>
        Reset
      </Button>
      <Button buttonType="secondary" onClick={removeItems}>
        Remove all items
      </Button>
    </div>
  );
};

export default ButtonGroup;
