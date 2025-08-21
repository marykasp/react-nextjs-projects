import HashTagItem from "./HashTagItem";
import { useFeedbackItemsContext } from "../context/FeedbackItemsContextProvider";

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
