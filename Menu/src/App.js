import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [filteredItem, setFilteredItem] = useState([...items]);
  function handleAllClick() {
    setFilteredItem(items);
  }
  function handleBreakFastClick() {
    let newItems = items.filter((item) => {
      return item.category === "breakfast";
    });
    setFilteredItem(newItems);
   
  }

  function handleLunchClick() {
    setFilteredItem(
      items.filter((item) => {
        return item.category === "lunch";
      })
    );
  }

  function handleShakeClick() {
    setFilteredItem(
      items.filter((item) => {
        return item.category === "shakes";
      })
    );
  }
  return (
    <div className="container">
      <h2 className="title">Our Menu</h2>

      <div className="buttons">
        <button onClick={handleAllClick}>All</button>
        <button onClick={handleBreakFastClick}>BreakFast</button>
        <button onClick={handleLunchClick}>Lunch</button>

        <button onClick={handleShakeClick}>Shakes</button>
      </div>

     <div className="menu">
     <Categories menuItems={filteredItem} />
     </div>
    </div>
  );
}

export default App;
