import React, { useState } from "react";

function Review() {
  //using hook "useState" to define two state of variable
  const [reviews, setReviews] = useState([]);

  function handleReviewSubmit(event) {
    event.preventDefault(); //prevents the default form submission behavior
    const review = event.target.floatingTextarea.value; //store inputs from textarea
    setReviews([...reviews, review]); // adds the new review to the reviews state variable using the spread operator
    event.target.reset(); //clears the form
  }

  return (
    <div className="card-body">
      <h5>Reviews:</h5>
      <ul id="review-container">
        {reviews.map(
          (
            review,
            index //Each review is rendered as a list item.
          ) => (
            <li key={index}>"{review}"</li> //givin a unique key based on its index in the reviews array.
          )
        )}
      </ul>
      <form onSubmit={handleReviewSubmit} className="form-floating">
        <textarea
          className="form-control"
          placeholder=""
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea" className="text-secondary">
          Comments
        </label>
        <button type="submit" className="btn btn-secondary my-2">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Review;
