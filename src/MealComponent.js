import React, { useEffect, useState } from 'react';
import './meal.css';
const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const MealComponent = () => {
  const [mealData, setMealData] = useState([]);
  const [searchMeal, setSearchMeal] = useState('');

  console.log(mealData);

  useEffect(() => {
    const fetchData = async (url) => {
      const response = await fetch(url);
      const { meals } = await response.json();
      setMealData(meals);
    };
    const searchUrl = `${URL}${searchMeal}`;
    fetchData(searchUrl);
  }, [searchMeal]);

  const handleSearch = (e) => {
    setSearchMeal(e.target.value);
  };
  const handleDelete = (idMeal) => {
    const updateMeal = mealData.filter(
      (eachItem) => eachItem.idMeal !== idMeal
    );
    console.log(updateMeal);
    setMealData(updateMeal);
  };
  return (
    <div className="container">
      <div className="searchBox">
        <input type="search" value={searchMeal} onChange={handleSearch} />
      </div>
      <div className="mealData">
        {mealData.map((eachMeal) => {
          const { idMeal, strArea, strCategory, strMealThumb, strMeal } =
            eachMeal;
          return (
            <div className="meal">
              <img width={200} height={200} src={strMealThumb} alt={strMeal} />
              <p>Meal Name: {strMeal}</p>
              <p>Category: {strCategory}</p>
              <p>Area :{strArea}</p>
              <button onClick={() => handleDelete(idMeal)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MealComponent;
