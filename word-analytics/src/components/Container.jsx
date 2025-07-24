import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";
import {
  INSTAGRAM_MAX_CHARACTERS,
  FACEBOOK_MAX_CHARACTERS,
} from "../constants";

const Container = () => {
  const [text, setText] = useState("");

  // derive values from the text state
  const statDetails = {
    numberOfCharacters: text.length,
    // split the string on whitespace character into an array, filter through array and save words that are not empty strings
    numberOfWords: text.split(" ").filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats statDetails={statDetails} />
    </main>
  );
};

export default Container;
