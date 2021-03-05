import React, { Component } from "react";
import $ from "jquery";
import "./style/Rate.scss";
import MasterData from "./firebase_firestore";
import StarRatings from "react-star-ratings";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip_address: null,
      oldRate: null,
    };
    this.beforeRate = React.createRef();
    this.afterRate = React.createRef();
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
      if (oldRate) {
        console.log("rated");
        self.setState({ oldRate: oldRate });
      } else if (response[0].ip == self.state.ip_address) {
        console.log("rated");
        self.setState({ oldRate: response[0].rate });
      }
    }
  }
  render() {
    let initRate = 5;
    if (this.state.oldRate) initRate = this.state.oldRate;
    return (
      <div>
        <div >
          <Rate initRate={initRate}></Rate>
        </div>
        <div>
          <Rated initRate={initRate}> </Rated>
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
  bindProps() {
    if (this.props.initRate) this.setState({ rating: this.props.initRate });
    console.log(this.state.rating);
  }
  render() {
    let rating = this.state.rating;
    if (!rating) rating = 4;
    return (
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={this.changeRating}
        name="rating"
      />
    );
  }
}

class Rated extends Component {
  render() {
    // aggregateRating = 2.35;
    console.log("rated", this);

    return (
      <StarRatings rating={2.403} starDimension="40px" starSpacing="15px" />
    );
  }
}
