import Button from "./Button";

const ButtonGroup = ({ removeItems }) => {
  return (
    <div className="button-group">
      <Button buttonType="secondary">Mark all as complete</Button>
      <Button buttonType="secondary">Mark all as incomplete</Button>
      <Button buttonType="secondary">Reset</Button>
      <Button buttonType="secondary" onClick={removeItems}>
        Remove all items
      </Button>
    </div>
  );
};

export default ButtonGroup;
