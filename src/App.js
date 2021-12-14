import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NewInvoice from "./components/sectionOne/NewInvoice";
import ItemSection from "./components/sectionTwo/ItemSection";
import SideNav from "./components/sideNav/SideNav";

export const ItemContext = React.createContext();

const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      // return [...state, action];
      return (state = [...state, action.payload]);
    case "deleteItem":
      return state;
    default:
      return state;
  }
};

function App() {
  const [items, dispatch] = useReducer(reducer, initialState);
  return (
    <ItemContext.Provider value={{ items: items, itemDispatch: dispatch }}>
      <div className="App">
        <SideNav />
        <Navbar />
        <NewInvoice />
        <ItemSection />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
