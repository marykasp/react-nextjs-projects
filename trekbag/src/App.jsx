import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  // add new item to end of items list - separate implementation logic from event, just pass item name to parent to then create object
  const handleAddItem = (itemText) => {
    setItems((prevItems) => [
      ...prevItems,
      { id: new Date().getTime(), name: itemText, packed: false },
    ]);
  };

  // remove all items from list
  const handleRemoveAllItems = () => {
    setItems([]);
  };

  // reset items to initial values
  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar
          addItem={handleAddItem}
          removeItems={handleRemoveAllItems}
          resetItems={handleResetToInitial}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
