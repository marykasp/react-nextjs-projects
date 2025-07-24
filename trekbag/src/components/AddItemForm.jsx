import Button from "./Button";
import { useState, useRef } from "react";

const AddItemForm = ({ addItem }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(itemText);

    // validate input data
    if (!itemText) {
      // TODO: add toast notification for validation warning
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    // create a new item object with the item name retrieved from the input and stored in state

    // pass new item object to function on parent which will use state update function to update the state
    addItem(itemText);
    setItemText("");
  };

  const handleChange = (e) => {
    setItemText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        placeholder="toothbrush..."
        value={itemText}
        onChange={handleChange}
        autoFocus={true}
        ref={inputRef}
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
