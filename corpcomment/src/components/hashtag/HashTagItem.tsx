type HashTagItemProps = {
  company: string;
};

const HashTagItem = ({ company }: HashTagItemProps) => {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
};

export default HashTagItem;
