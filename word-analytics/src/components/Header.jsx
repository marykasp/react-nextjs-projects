import Background from "./Background";

const Header = () => {
  return (
    <header>
      <Background />
      <h1 className="first-heading">
        Word <span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
};

export default Header;
