import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    // fetch data from API server - interact with system outside of React
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        // console.log(data.feedbacks);
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Something went wrong");
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} key={feedbackItem.id} />
      ))}
    </ol>
  );
};

export default FeedbackList;
