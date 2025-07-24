import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem, removeItems, resetItems }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup removeItems={removeItems} resetItems={resetItems} />
    </div>
  );
};

export default Sidebar;
