import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({ onAddToList }: FeedbackFormProps) => {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  // get number of characters left if limit is 150
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      // add styling to text area
      setShowValidIndicator(true);
      setTimeout(() => {
        setShowValidIndicator(false);
      }, 2000);
    } else {
      // display error message if user forgot hashtag
      setShowInvalidIndicator(true);

      setTimeout(() => {
        setShowInvalidIndicator(false);
      }, 2000);

      return;
    }

    // add new text item to list after validation, new feedback item object will be created and added to server
    onAddToList(text);

    setText("");
  };

  return (
    <form
      className={`form ${showValidIndicator ? "form--valid" : ""} ${
        showInvalidIndicator ? "form--invalid" : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        value={text}
        id="feedback-textarea"
        placeholder="feedback"
        spellCheck={false}
        onChange={handleChange}
        maxLength={MAX_CHARACTERS}
      />
      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hashtag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
