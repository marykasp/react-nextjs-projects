import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import Pattern from "../Pattern";

const Header = () => {
  return (
    <header>
      <Pattern />
      <Logo />
      <h1>
        Give Feedback. <span>Publicly.</span>
      </h1>
      <FeedbackForm />
    </header>
  );
};

export default Header;
