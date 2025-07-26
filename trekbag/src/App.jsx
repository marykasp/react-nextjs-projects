import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  // check first localStorage to see if there are items if not use initialItems
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
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={items.length}
          numberItemsPacked={items.filter((item) => item.packed).length}
        />

        <ItemList
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleItem={handleToggleItem}
        />
        <Sidebar
          onAddItem={handleAddItem}
          onRemoveItems={handleRemoveAllItems}
          onResetItems={handleResetToInitial}
          markItemsComplete={handleMarkAllAsComplete}
          markItemsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
