// components/UserReviews.js
const UserReviews = ({ reviews }) => {
    return (
      <section className="py-6">
        <h2 className="text-2xl font-heading text-darkGrey">User Reviews</h2>
        <div className="mt-4 space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-lightGrey rounded">
              <h3 className="font-bold text-lg">{review.username}</h3>
              <p className="mt-2">{review.comment}</p>
              <p className="mt-1 text-secondary">Rating: {review.rating}/5</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default UserReviews;
  