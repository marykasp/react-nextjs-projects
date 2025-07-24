import Button from "./Button";
import { useState } from "react";

const AddItemForm = ({ addItem }) => {
  const [itemText, setItemText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(itemText);
    // add item name to items state OR can pass setItems to this form component and update item here
    addItem(itemText);
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
      />
      <Button>Add to list</Button>
    </form>
  );
};

export default AddItemForm;
