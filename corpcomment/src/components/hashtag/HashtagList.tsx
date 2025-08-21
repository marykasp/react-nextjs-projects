import HashTagItem from "./HashTagItem";
import { useFeedbackItemsContext } from "../../lib/hooks";

const HashtagList = () => {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashTagItem company={company} onSelectCompany={handleSelectCompany} />
      ))}
    </ul>
  );
};

export default HashtagList;
