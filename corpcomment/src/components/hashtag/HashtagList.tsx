import HashTagItem from "./HashTagItem";

type HashTagProps = {
  companyList: string[];
  handleSelectCompany: (text: string) => void;
};

const HashtagList = ({ companyList, handleSelectCompany }: HashTagProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
};

export default HashtagList;
