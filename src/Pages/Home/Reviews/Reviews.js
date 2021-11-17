import React, { useState, useEffect } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section id="testimonials">
      <div className="theme-heading text-center my-4">
        <h3 className="fw-bold">Client's Reviews</h3>
      </div>
      <div className="testimonial-box-container">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
