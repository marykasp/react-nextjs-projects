import Button from "./Button";
import { secondaryButtons } from "../lib/constants";

const ButtonGroup = () => {
  return (
    <div className="button-group">
      {secondaryButtons.map((buttonText) => (
        <Button type="secondary" key={buttonText}>
          {buttonText}
        </Button>
      ))}
    </div>
  );
};

export default ButtonGroup;
