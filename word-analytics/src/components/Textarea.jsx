import { useState } from "react";
import Warning from "./Warning";

const Textarea = () => {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  console.log(text);

  const handleChange = (e) => {
    // extract text from event (controlled input)
    let newText = e.target.value;

    // basic validation
    if (newText.includes("<script>")) {
      setWarningText("No script tag allowed");
      setWarning(true);
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
      {warning && <Warning warningText={warningText} />}
    </section>
  );
};

export default Textarea;
