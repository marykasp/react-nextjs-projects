type HashTagProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: HashTagProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <li>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
};

export default HashtagList;
