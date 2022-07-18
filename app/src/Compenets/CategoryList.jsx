import "../App.css";
import CategoryItem from "./CategoryItem";
export default function CategoryList({ category }) {
  return (
    <div className="cards">
      {category.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}
