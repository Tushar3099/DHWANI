import React from "react";
import StarRatingComponent from "react-star-rating-component";

class Rating extends React.Component {
  constructor() {
    super();

    this.state = {
      rating: 1
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { rating } = this.state;

    return (
      <div>
        <h2 className="text">Your Rating: {rating}</h2>
        <div className="star">
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            emptyStarColor={"#ffffff"}
          />
        </div>
      </div>
    );
  }
}

export default Rating;
