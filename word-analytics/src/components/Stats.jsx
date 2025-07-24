const Stats = ({ text }) => {
  const numberofCharacters = text.length;

  return (
    <section className="stats">
      <Stat number={0} label="Words" />
      <Stat number={numberofCharacters} label="Characters" />
      <Stat number={280} label="Instagram" />
      <Stat number={2200} label="Facebook" />
    </section>
  );
};

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span className="stat__number">{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

export default Stats;
