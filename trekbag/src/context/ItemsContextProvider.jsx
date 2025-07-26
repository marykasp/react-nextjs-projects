import { useState, useEffect } from "react";
import { initialItems } from "../lib/constants";
import { ItemsContext } from "../lib/hooks";

// create context
// export const ItemsContext = createContext();

const ItemsContextProvider = ({ children }) => {
  // check first localStorage to see if there are items if not use initialItems
  // passing a function to use useState will ensure it only runs on first render
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || initialItems;
  });

  // add new item to end of items list - separate implementation logic from event, just pass item name to parent to then create object
  const handleAddItem = (itemText) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: new Date().getTime(), name: itemText, packed: false },
    ]);
  };

  // delete specified item with ID from items list
  const handleDeleteItem = (id) => {
    console.log(`Deleting item with id: ${id}`);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    // use map method to edit one property on an array of objects
    const newItems = items.map((item) => {
      // find item in array with id
      if (item.id === id) {
        // override packed property on the item with the id passed in
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(newItems);
  };

  // remove all items from list
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  // reset items to initial values
  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  // iterate over all items and change the packed property to true to have checkbox be marked as complete
  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  useEffect(() => {
    // when component first renders and everytime items list is updated - update the items on localStorage
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
        handleRemoveAllItems,
        handleResetToInitial,
        handleToggleItem,
      }}
    >
      {children}
    </ItemsContext>
  );
};

export default ItemsContextProvider;
