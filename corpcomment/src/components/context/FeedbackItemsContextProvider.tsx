import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { TFeedbackItem } from "../../lib/type";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (text: string) => void;
};

// union type since context will be null inside the Provider component
export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null,
);

const FeedbackItemsContextProvider = ({
  children,
}: FeedbackItemsContextProviderProps) => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState("");

  // only filter feedbackItems if there is a selectedCompany
  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany,
          )
        : feedbackItems,
    [feedbackItems, selectedCompany],
  );

  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems],
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  const handleAddToList = async (text: string) => {
    // validation of user input will occur before being passed to this f(x) to add object to the list
    const companyName = text
      .split(" ")
      .find((word: string) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName?.substring(0, 1).toUpperCase(),
    };

    //add new item to end of list
    setFeedbackItems([...feedbackItems, newItem]);

    // submit new item to the backend server
    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
    );
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong. Please try again");
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <FeedbackItemsContext.Provider
      value={{
        feedbackItems,
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
