import { useState } from "react";

function Recipe() {
  let items = ["Cake", "Cake2", "Cake3", "Cake4", "Cake5"];
  let selectedIndex = 0;
  // Hook //state hook
  const arr = useState(-1);
  arr[0] //variable (selectedIndex)
  arr[1] // updater function
 
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { selectedIndex = index; }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Recipe;
