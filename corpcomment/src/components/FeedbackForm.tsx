import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";
// import { type FeedbackItem } from "../lib/type";

const FeedbackForm = () => {
  const [text, setText] = useState("");

  // get number of characters left if limit is 150
  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;

    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  return (
    <form className="form">
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
