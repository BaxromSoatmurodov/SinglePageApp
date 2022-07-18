import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import CategoryList from "../Compenets/CategoryList";
import Preloader from "../Compenets/Preloader";
import Search from "../Compenets/Search";
import "../App.css";

export default function Home() {
  const [category, setCategory] = useState([]);
  const [filterCategory, setfilterCategory] = useState([]);
  const handleFilterCategory = (str) => {
    setfilterCategory(
      category.filter((item) =>
        item.strCategory.ToUppperCase().includes(str.ToUppperCase())
      )
    );
  };
  useEffect(() => {
    getAllCategories().then((data) => {
      setCategory(data.categories);
      setfilterCategory(data.categories);
    });
  }, []);
  return (
    <div className="nav">
      <Search cb={handleFilterCategory} />
      {!category.length ? (
        <Preloader />
      ) : (
        <CategoryList category={filterCategory} />
      )}
    </div>
  );
}
