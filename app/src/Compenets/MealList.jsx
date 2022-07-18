import "../App.css";
import MealItem from "./MealItem";
export default function MealList({ meal }) {
  return (
    <div className="cards">
      {meal.map((item) => (
        <MealItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
}
