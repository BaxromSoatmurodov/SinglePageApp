import { useState, useEffect } from "react";
import { getFilterofCategories } from "../api";
import { useParams } from "react-router-dom";
import MealList from "../Compenets/MealList";
export default function Category() {
  let { name } = useParams();
  const [meal, setMeals] = useState([]);
  useEffect(() => {
    getFilterofCategories(name).then((data) => setMeals(data.meals));
  }, [name]);
  console.log(meal);
  return <div>{<MealList meal={meal} />}</div>;
}
