import Logo from "./Logo";
import Counter from "./Counter";

const Header = ({ numberItemsPacked, totalNumberOfItems }) => {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        numberItemsPacked={numberItemsPacked}
      />
    </header>
  );
};

export default Header;
