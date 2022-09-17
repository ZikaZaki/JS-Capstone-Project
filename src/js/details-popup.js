
const displayPopup = async (meal) =>{
    const { strMeal, strMealThumb, strCategory, strArea, strTags  } = meal;
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
            <h2 class="comments-title">Comments(2)</h2>
            <ul class="comments-list">
                <li>
                <div class="comment-wrapper">
                    <span class="comment-header">03/11/2022: ZikaZaki</span>
                    <p class="comment-body">I'd love to buy it</p>
                </div>
                </li>
            </ul>
            
            <!-- Comment Form -->
            <div class="comment-form">
                <h3 class="form-title">Add Your Comment</h3>
                <form action="#">
                    <div class="form-group">
                        <label for="author" hidden>Your name</label>
                        <input type="text" id="author" placeholder="Your name">
                    </div>
                    <div class="form-group">
                        <label for="comment" hidden>Your comment</label>
                        <textarea name="comment" id="comment" rows="10" placeholder="Your comment"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="card-btn" type="submit">Comment</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </div>
    `;
    document.querySelector('#page_wrapper').appendChild(popup);
    popup.querySelector('#close_btn').addEventListener('click', () => {
        popup.remove();
        document.body.style.overflow = 'auto';
    });
    // popup.querySelector('#comment_form').addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const commenterName = popup.querySelector('#commenter_name').value;
    //     const commentText = popup.querySelector('#comment_text').value;
    //     const comment = document.createElement('div');
    //     comment.classList.add('comment');
    //     comment.innerHTML = `
    //     <div class="comment-header">
    //         <h3>${commenterName}</h3>
    //         <span class="comment-date">Date</span>
    //     </div>
    //     <p class="comment-text">${commentText}</p>
    //     `;
    //     popup.querySelector('.comments-content').appendChild(comment);
    //     popup.querySelector('#comment_form').reset();
    // });
    document.body.style.overflow = 'hidden';
};

// displayPopup(meal){

// }

export default displayPopup;