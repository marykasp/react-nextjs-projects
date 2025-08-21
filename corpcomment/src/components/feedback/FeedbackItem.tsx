import { TriangleUpIcon } from "@radix-ui/react-icons";
import { type TFeedbackItem } from "../../lib/type";
import { useState } from "react";

// for props object
type FeedbackItemProps = { feedbackItem: TFeedbackItem };

const FeedbackItem = ({ feedbackItem }: FeedbackItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : ""}`}
      onClick={() => setOpen((prev) => !prev)}
    >
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

      {/* <p>{feedbackItem.daysAgo}d</p> */}
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
};

export default FeedbackItem;
