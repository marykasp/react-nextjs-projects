import Button from "./Button";

const AddItemForm = () => {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" placeholder="toothbrush..." />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
