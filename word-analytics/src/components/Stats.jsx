const Stats = ({ statDetails }) => {
  return (
    <section className="stats">
      <Stat number={statDetails.numberOfWords} label="Words" />
      <Stat number={statDetails.numberOfCharacters} label="Characters" />
      <Stat number={statDetails.instagramCharactersLeft} label="Instagram" />
      <Stat number={statDetails.facebookCharactersLeft} label="Facebook" />
    </section>
  );
};

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

export default Stats;
