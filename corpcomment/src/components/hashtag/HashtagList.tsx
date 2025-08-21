import HashTagItem from "./HashTagItem";

type HashTagProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: HashTagProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
