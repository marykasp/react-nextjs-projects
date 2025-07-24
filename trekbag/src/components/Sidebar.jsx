import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup />
    </div>
  );
};

export default Sidebar;
