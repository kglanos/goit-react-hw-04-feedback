import React, { useState } from 'react';
import Section from './section/Section';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';


const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const  countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
};

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    const sum = good + neutral + bad;
    return sum === 0 ? 0 : Math.round((good / sum) * 100);
  };

  const handleClick = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedback}
            onLeaveFeedback={(name) => handleClick(name)}
          />  
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  };

export default App;