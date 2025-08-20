import { TriangleUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
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
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
};

export default FeedbackItem;
