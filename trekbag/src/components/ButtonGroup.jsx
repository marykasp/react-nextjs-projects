import Button from "./Button";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Button type="secondary">Mark all as complete</Button>
      <Button type="secondary">Mark all as complete</Button>
      <Button type="secondary">Reset</Button>
      <Button type="secondary">Remove all items</Button>
    </div>
  );
};

export default ButtonGroup;
