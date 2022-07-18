import { API_URL } from "./config";
const getAllMealById = async (meal) => {
  const response = await fetch(API_URL + `lookup.php?i=` + meal);
  return await response.json();
};
const getAllCategories = async () => {
  const response = await fetch(API_URL + `categories.php`);
  return await response.json();
};
const getFilterofCategories = async (food) => {
  const response = await fetch(API_URL + `filter.php?c=` + food);
  return await response.json();
};

export { getAllMealById, getAllCategories, getFilterofCategories };
