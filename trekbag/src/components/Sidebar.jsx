import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem, inputRef }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} inputRef={inputRef} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
