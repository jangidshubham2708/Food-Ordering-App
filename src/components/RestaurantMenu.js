
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { json, useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);


console.log(json);
  };
  

  if (resInfo === null) return <Shimmer />;

  
  const {text} =
  resInfo?.cards[0]?.card?.card;

  const { cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

       
  return (
    <div className="menu">
      <h1>{text}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/6/7/a05bf8ea-ee68-4fd8-be01-1ac10f940fa5_c8e1a500-cd36-4f60-a771-1e5cf22e73c4.jpg_compressed"} alt="Example" /> */}
    
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;