import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    companyLetter: "S",
    companyName: "Starbucks",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit.",
    days: 4,
  },
  {
    upvoteCount: 300,
    companyLetter: "S",
    companyName: "Starbucks",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit.",
    days: 4,
  },
  {
    upvoteCount: 593,
    companyLetter: "S",
    companyName: "Starbucks",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, impedit.",
    days: 4,
  },
];

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
