import React, { Component } from "react";

import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";

import "./App.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  onLeaveFeedback = (ev) => {
    const { name } = ev.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const onLeaveFeedback = this.onLeaveFeedback;

    return (
      <div className="App">
        <h2>Please leave feedback</h2>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />

        <div>
          <h2>Statistics</h2>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </div>
      </div>
    );
  }
}

export default App;
