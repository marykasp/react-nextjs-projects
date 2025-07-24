import { useState } from "react";
import Warning from "./Warning";

const Textarea = ({ text, setText }) => {
  // const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    // extract text from event (controlled input)
    let newText = e.target.value;

    // basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      newText = newText.replace("<script>", "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <section className="textarea">
      <textarea
        spellCheck="false"
        placeholder="Enter your text"
        onChange={handleChange}
        value={text}
      ></textarea>
      {warningText && <Warning warningText={warningText} />}
    </section>
  );
};

export default Textarea;
