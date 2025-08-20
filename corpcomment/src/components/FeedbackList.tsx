import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);

  useEffect(() => {
    // fetch data from API server - interact with system outside of React
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.feedbacks);
        setFeedbackItems(data.feedbacks);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
};

export default FeedbackList;
