import { getMeals, getLikes, setLikes } from './api-utils.js';
import displayPopup from './details-popup.js';
import logo from '../img/logo.png';

// Setting the header logo
const setHeaderLogo = () => {
  document.querySelector('#header_logo').src = logo;
};

// Setting the meals count element
const setMealsCount = async (count) => {
  const mealsCount = await document.querySelector('#meals_count');
  return mealsCount.innerHTML = `Number of Meals: (${count})`;
};

const displayMeals = async () => {
  try {
    // Destructuring the { meals-list } fetched form the API
    const { meals } = await getMeals();
    // Fetching the likes from the API
    const mealsLikes = await getLikes();
    // Setting the meals count element
    setMealsCount(meals.length);
    // Get the Page-Content element to insert meal cards
    const pageContent = document.querySelector('#page_content');

    // Looping through the meals & destructuring the meal object into variables
    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
      // finding the likes for the current meal
      const likes = mealsLikes.filter((like) => like.item_id === idMeal);
      const mealCard = document.createElement('div');
      mealCard.classList.add('card-wrapper');
      mealCard.innerHTML = `
            <div class="card" meal_id="${idMeal}">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img id="card_img" class="card-img" src="${strMealThumb}" alt="${strMeal} Image">
                    </div>
                </div>
                <div class="card-content">
                    <div class="title-wrapper">
                        <div class="name-wrapper">
                            <h2 class="meal-name">${strMeal}</h2>
                        </div> 
                        <div class="like-content">
                            <ion-icon id="heart_icon" class="heart-icon" name="heart"></ion-icon>
                            <span id="like_count" class="like-count">${likes.length > 0 ? likes[0].likes: 0} Likes</span>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button id="comment_btn" class="card-btn">Comments</button>
                        <button id="reservation_btn" class="card-btn">Reservations</button>
                    </div>
                </div>
            </div>
            `;

      /* Setting the comment button event listener */
      mealCard.querySelector('#comment_btn').addEventListener('click', () => {
        // Displaying the details-popup
        displayPopup(meal);
        console.log('comment button clicked');
      });

      /* Setting the reservation button event listener */
      mealCard.querySelector('#reservation_btn').addEventListener('click', () => {
        /* here you should invoke the showReservations(idMeal) function
          and pass the idMeal as an argument
        */
      });

      /* Setting the like button event listener */
      mealCard.querySelector('#heart_icon').addEventListener('click', (e) => {
        // getting the like count element
        const likeCount = e.target.parentElement.querySelector('#like_count');
        // setting the likes API
        setLikes(idMeal);
        // updating the like count element
        likeCount.innerHTML = `${likes[0].likes + 1} Likes`;
   
        console.log('like button clicked');
      });


      return pageContent.appendChild(mealCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};

export { displayMeals, setHeaderLogo };
