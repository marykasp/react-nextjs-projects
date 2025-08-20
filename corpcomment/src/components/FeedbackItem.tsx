import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  companyLetter: string;
  companyName: string;
  text: string;
  days: number;
};

// for props object
type FeedbackItemProps = { feedbackItem: FeedbackItem };

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  return (
    <li className="feedback">
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      {/* logo square */}
      <div>
        <p>{feedbackItem.companyLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>4d</p>
    </li>
  );
};

export default FeedbackItem;
