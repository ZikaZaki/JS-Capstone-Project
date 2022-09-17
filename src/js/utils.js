import mealsURL from './api-utils.js';
import displayPopup from './details-popup.js';
import logo from '../img/logo.png';

const setHeaderLogo = () => {
  document.querySelector('#header_logo').src = logo;
};

const setMealsCount = async (meals) => {
  const countElement = document.querySelector('#meals_count');
  const counter = await meals.length;
  countElement.innerHTML = `Number of Meals: (${counter})`;
  return counter;
};

const displayMeals = async () => {
  try {
    // Fetching the meals from the API
    const fetchedMeals = await fetch(mealsURL);
    const { meals } = await fetchedMeals.json();
    // Setting the meals count
    setMealsCount(meals);
    // Get the Page-Content element to insert meal cards
    const pageContent = document.querySelector('#page_content');
    // Looping through the meals
    meals.map((meal) => {
      const {
        idMeal, strMeal, strMealThumb,
      } = meal;
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
                            <span id="like_count" class="like-count"></span>
                        </div>
                    </div>
                    <div class="card-buttons">
                        <button id="comment_btn" class="card-btn">Comments</button>
                        <button id="reservation_btn" class="card-btn">Reservations</button>
                    </div>
                </div>
            </div>
            `;

      // Setting the comment button event listener
      mealCard.querySelector('#comment_btn').addEventListener('click', () => {
        /* here you should invoke the showComments(idMeal) function
                and pass the idMeal as an argument
                */
        console.log('comment button clicked');
        displayPopup(meal);
        //  const modal = document.querySelector('#modal_container');
        //  modal.style.display = 'flex';
        //  modal.querySelector('#card_img').src = strMealThumb;
      });

      // Setting the reservation button event listener
      mealCard.querySelector('#reservation_btn').addEventListener('click', () => {
        /* here you should invoke the showReservations(idMeal) function
                and pass the idMeal as an argument
                */
      });

      // Setting the like button event listener
      // const likeCount = mealCard.querySelector('#like_count');
      mealCard.querySelector('#heart_icon').addEventListener('click', () => {
        /* here you should invoke the addLike(idMeal, likeCount) function
                and pass the { idMeal, likeCount } as arguments
                */
      });

      return pageContent.appendChild(mealCard);
    });
  } catch (errorMsg) {
    throw new Error(errorMsg);
  }
};

export { displayMeals, setHeaderLogo };
