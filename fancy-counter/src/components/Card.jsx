import Count from "./Count";
import Title from "./Title";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

const Card = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <Title>Fancy Counter</Title>
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButtons
          type="minus"
          setCount={setCount}
          className="count-btn-icon"
        />
        <CountButtons
          type="plus"
          setCount={setCount}
          className="count-btn-icon"
        />
      </ButtonContainer>
    </div>
  );
};

export default Card;
