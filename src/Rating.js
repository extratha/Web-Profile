import React, { Component } from "react";
import $ from "jquery";
import MasterData from "./firebase_firestore";
import StarRatings from "react-star-ratings";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip_address: null,
    };

  }
  async componentDidMount() {
    const self = this;
    await $.getJSON("https://api.ipify.org?format=json", function (data) {
      self.setState({ ip_address: data.ip });
    });
    const ratesRef = new MasterData("rates");
    const response = await ratesRef.getCollectionList(1, 1, {
      ip: self.state.ip_address,
    });
    if (response & (response.length > 0)) {
      const oldRate = localStorage.getItem("rated");
      if (oldRate) console.log("rated");
      else if (response[0].ip == self.state.ip_address) {
        console.log("rated");
      }
    }
  }
  render() {
    let beforeRate = "before show";
    let afterRate = "after hidden";
    let initRate
    return (
      <div>
        <div className={beforeRate}>
          <Rate id='beforeRate'></Rate>
        </div>
        <div className={afterRate}>
          <Rated id='afterRate'> </Rated>
        </div>
      </div>
    );
  }
}

export default Rating;

class Rate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        rating: null,
      };
    }
  changeRating(newRating, name) {
    this.setState({
      rating: newRating,
    });
  }

  render() {
    // rating = 2;
    console.log('rate',this)
    return (
      <StarRatings
        rating={this.state.rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        numberOfStars={6}
        name="rating"
      />
    );
  }
}

class Rated extends Component {
  render() {
    // aggregateRating = 2.35;
    console.log('rated', this)
    return (
      <StarRatings rating={2.403} starDimension="40px" starSpacing="15px" />
    );
  }
}
