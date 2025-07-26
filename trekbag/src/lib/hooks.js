import { useContext, createContext } from "react";

// create context
export const ItemsContext = createContext();

export const useItemsContext = () => {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider",
    );
  }
  return context;
};
