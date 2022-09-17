import { getComments, setComments } from './api-utils.js';

const displayPopup = async (meal) => {
  const {
    idMeal, strMeal, strMealThumb, strCategory, strArea, strTags,
  } = meal;
  // Fetch the comments of the current meal
  const comments = await getComments(idMeal);

  const popup = document.createElement('div');
  popup.classList.add('modal-container');
  popup.setAttribute('id', 'modal_container');
  popup.innerHTML = `
      <div class="modal">
      <!-- close button -->
      <div id="close_btn" class="close-btn"><a href="#"></a></div>
      <div class="popup-content">
          <!-- image -->
          <div class="popup-image">
              <img id="popup_img" class="popup-img" src="${strMealThumb}" alt="${strMeal} Image">
          </div>
          <!-- Details -->
          <div class="card-details">
              <div class="name-wrapper">
                  <h2 class="dish-name">${strMeal}</h2>
              </div>
              <div class="meal-info">
                  <h3 class="meal-category">Category: <span id="meal_category">${strCategory}</span></h3>
                  <h3 class="meal-area">Area: <span id="meal_area">${strArea}</span></h3>
                  <h3 class="meal-tags">Tags: <span id="meal_tags">${strTags}</span></h3>
              </div>
          </div>
  
          <!-- Comments -->
          <div class="meal-comments">
              <h2 class="comments-title">Comments(${comments.length > 0 ? comments.length : 0})</h2>
              <ul id="comments_list" class="comments-list">
                  
              </ul>
              
              <!-- Comment Form -->
              <div class="comment-form">
                  <h3 class="form-title">Add Your Comment</h3>
                  <form action="#" id="comment_form">
                      <div class="form-group">
                          <label for="author" hidden>Your name</label>
                          <input type="text" id="comment_author" placeholder="Your name" required>
                      </div>
                      <div class="form-group">
                          <label for="comment" hidden>Your comment</label>
                          <textarea name="comment" id="comment_txt" rows="10" placeholder="Your comment" required></textarea>
                      </div>
                      <div class="form-group">
                          <button id="submit_btn" class="card-btn" type="submit">Comment</button>
                      </div>
                  </form>
              </div>
          </div>
          </div>
      </div>
      `;

  // Populate the comments list
  /* eslint-disable */
  if (comments.length > 0) {
    const commentsList = popup.querySelector('#comments_list');

    comments.map((c) => {
      const {
        username, comment, creation_date,
      } = c;
      const listItem = document.createElement('li');
      listItem.innerHTML = `
                <div class="comment-wrapper">
                    <span class="comment-header">(${creation_date}) ${username}:&ensp;</span>
                    <p class="comment-body">${comment}</p>
                </div>
            `;
      return commentsList.appendChild(listItem);
    });
  }

  document.querySelector('#page_wrapper').appendChild(popup);

  popup.querySelector('#close_btn').addEventListener('click', () => {
    popup.remove();
    document.body.style.overflow = 'auto';
  });

  popup.querySelector('#submit_btn').addEventListener('click', (e) => {
    const commentsList = popup.querySelector('#comments_list');
    const user = popup.querySelector('#comment_author').value;
    const comment = popup.querySelector('#comment_txt').value;
    const t = new Date();
    const date = (`0${t.getDate()}`).slice(-2);
    const month = (`0${t.getMonth() + 1}`).slice(-2);
    const year = t.getFullYear();
    const fullDate = `${year}-${month}-${date}`;

    // Add the new comment to the comments list without the need to refresh the page
    if (user.trim() !== '' && comment.trim() !== '') {
      e.preventDefault();
      setComments(idMeal, user, comment);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
                <div class="comment-wrapper">
                    <span class="comment-header">(${fullDate}) ${user}:&ensp;</span>
                    <p class="comment-body">${comment}</p>
                </div>
         `;
      commentsList.appendChild(listItem);
      popup.querySelector('#comment_form').reset();
    }
  });
  document.body.style.overflow = 'hidden';
};

export default displayPopup;