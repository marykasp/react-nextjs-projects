import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import HashtagList from "./components/hashtag/HashtagList";
import { useMemo, useState } from "react";
import FeedbackItemsContextProvider from "./components/context/FeedbackItemsContextProvider";

function App() {
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

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <div className="app">
      <Footer />

      <Container
        feedbackItems={filteredFeedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}

export default App;
