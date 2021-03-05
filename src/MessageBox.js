import React, { Component } from "react";
import $ from "jquery";
import MasterData from "./firebase_firestore";
class MessageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip_address: null,
    };
  }
  async componentDidMount() {
  }
  render() {
    return <div className="message-box"></div>;
  }
}

export default MessageBox;
