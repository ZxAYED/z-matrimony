import { Rating } from 'keep-react';
import useReview from '../Hooks/useReview';


const Reviews = () => {
    const [reviews,refetch2]=useReview()
    console.log(reviews);
    return (
        <div>
            <Rating
  placeholderRating={3.5}
  emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
  placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
  fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
/>
        </div>
    );
};

export default Reviews;