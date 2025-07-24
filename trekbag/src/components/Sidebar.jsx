import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  addItem,
  removeItems,
  resetItems,
  markItemsComplete,
  markItemsIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={addItem} />
      <ButtonGroup
        removeItems={removeItems}
        resetItems={resetItems}
        markItemsComplete={markItemsComplete}
        markItemsIncomplete={markItemsIncomplete}
      />
    </div>
  );
};

export default Sidebar;
