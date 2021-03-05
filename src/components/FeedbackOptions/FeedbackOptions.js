import React, { Component } from "react";
// import s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  handleFeedback = (event) => {
    console.log(event.target);
  };
  render() {
    return (
      <div>
        <button type="button" onClick={this.handleFeedback}>
          Good
        </button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
