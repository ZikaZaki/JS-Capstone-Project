// import involvementURL from './api-urls.js';


//  const getMeals = async() => {
//     // Fetching the meals from the API
//     // const fetchedMeals = await fetch(mealsURL);
//     // const { meals } = await fetchedMeals.json();

//     return await fetch(mealsURL);

// };

//  const setLikes = async(idMeal) =>{
//     await fetch(`${involvementURL}/likes/?item_id=${idMeal}`);
// };

  const getLikes = async(baseURL) => {
    const response = await fetch(`${baseURL}likes/`);
    const likes = await response.json();

    return likes;
};

export default getLikes;