import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Counter from "./components/Counter";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import ItemsContextProvider from "./context/ItemsContextProvider";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
        <ItemsContextProvider>
          <Header>
            <Logo />
            <Counter />
          </Header>

          <ItemList />
          <Sidebar />
        </ItemsContextProvider>
      </main>

      <Footer />
    </>
  );
}

export default App;
