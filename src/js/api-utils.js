import { mealsURL, involvementURL } from './api-urls.js';

/* Fetch the meals list from MealsDB-API */
const getMeals = async() => {
    const response = await fetch(mealsURL);
    return await response.json();
};

// Adds a new like for an item in the likes-API
const setLikes = async(idMeal) =>{
    return await fetch(`${involvementURL}likes/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: idMeal,
      }),
    });
};

// Gets all items from the likes-API
const getLikes = async() => {
    const response = await fetch(`${involvementURL}likes/`);
    return await response.json();
};

export { getMeals, getLikes, setLikes };