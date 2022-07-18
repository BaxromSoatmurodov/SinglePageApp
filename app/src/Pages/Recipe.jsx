import "../App.css";
import { useState, useEffect } from "react";
import { getAllMealById } from "../api";
import { useParams, useHistory } from "react-router-dom";
export default function Recipe() {
  const { id } = useParams();
  const { goBack } = useHistory();
  const [Recipe, setRecipe] = useState([]);
  const [ToggleRecipe, setToggleRecipe] = useState(false);
  const handleToggleRecipe = () => {
    setToggleRecipe(!ToggleRecipe);
  };
  useEffect(() => {
    getAllMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);
  return (
    <div className="Recipe">
      <img src={Recipe.strMealThumb} alt={Recipe.strCategory} />
      <h5>
        <b>{Recipe.strMeal}</b>
      </h5>
      <h4>{Recipe.strCategory}</h4>
      <h4>Country:{Recipe.strArea}</h4>
      <p>{Recipe.strInstructions}</p>
      {Recipe.strYoutube ? (
        <h3>
          <h1>Youtube watch</h1>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${Recipe.strYoutube.slice(
              -11
            )}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </h3>
      ) : null}
      {ToggleRecipe ? (
        <button className="btn" onClick={handleToggleRecipe}>
          Hide Recipe
        </button>
      ) : (
        <button className="btn" onClick={handleToggleRecipe}>
          Show Recipe
        </button>
      )}
      {ToggleRecipe ? (
        <table className="centred">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Meassures</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(Recipe).map((key) => {
              if (key.includes(`Ingredient`) && Recipe[key]) {
                return (
                  <tr>
                    <td>{Recipe[key]}</td>
                    <td>{Recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      ) : null}

      <br />
      <br />
      <button onClick={goBack} className="btn">
        go Back
      </button>
    </div>
  );
}
