import Button from "./Button";
import { useState, useRef } from "react";

const AddItemForm = ({ setItems }) => {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(itemText);

    // validate input data
    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
      return;
    }
    // add item name to items state OR can pass setItems to this form component and update item here
    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
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
