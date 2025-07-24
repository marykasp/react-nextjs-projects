import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({ addItem, removeItems, resetItems, markItemsComplete }) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        removeItems={removeItems}
        resetItems={resetItems}
        markItemsComplete={markItemsComplete}
      />
    </div>
  );
};

export default Sidebar;
