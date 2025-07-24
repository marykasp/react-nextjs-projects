import { useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  // pass name of new item to then add to end of items list array
  const addItem = (newItem) => {
    // basic validation
    if (!newItem) {
      alert("Item name can' be empty");
      return;
    }

    // use current time to create a new unique ID
    setItems((prevItems) => [
      ...prevItems,
      { id: new Date().getTime(), name: newItem, packed: false },
    ]);
  };

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar addItem={addItem} />
      </main>

      <Footer />
    </>
  );
}

export default App;
