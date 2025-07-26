import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

const Sidebar = ({
  onAddItem,
  onRemoveItems,
  onResetItems,
  markItemsComplete,
  markItemsIncomplete,
}) => {
  return (
    <div className="sidebar">
      <AddItemForm addItem={onAddItem} />
      <ButtonGroup
        removeItems={onRemoveItems}
        resetItems={onResetItems}
        markItemsComplete={markItemsComplete}
        markItemsIncomplete={markItemsIncomplete}
      />
    </div>
  );
};

export default Sidebar;
