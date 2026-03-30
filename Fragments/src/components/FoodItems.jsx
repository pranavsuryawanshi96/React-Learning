import { useState } from "react";
import Item from "./Item";
const FoodItems = ({ item }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {item.map((item) => (
        //  we have to give  here key
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClick={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
