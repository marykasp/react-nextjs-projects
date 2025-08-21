import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import Pattern from "../Pattern";

type HeaderProps = {
  handleAddToList: (text: string) => void;
};

const Header = ({ handleAddToList }: HeaderProps) => {
  return (
    <header>
      <Pattern />
      <Logo />
      <h1>
        Give Feedback. <span>Publicly.</span>
      </h1>
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
};

export default Header;
