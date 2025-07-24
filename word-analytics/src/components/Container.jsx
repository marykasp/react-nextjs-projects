import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";

const Container = () => {
  const [text, setText] = useState("");

  // derive values from the text state
  const statDetails = {
    numberOfCharacters: text.length,
    // split the string on whitespace character into an array, filter through array and save words that are not empty strings
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    instagramCharactersLeft: 280 - text.length,
    facebookCharactersLeft: 2200 - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats statDetails={statDetails} />
    </main>
  );
};

export default Container;
