type HashTagItemProps = {
  company: string;
  onSelectCompany: (text: string) => void;
};

const HashTagItem = ({ company, onSelectCompany }: HashTagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
};

export default HashTagItem;
