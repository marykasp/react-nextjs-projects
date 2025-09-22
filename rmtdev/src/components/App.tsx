import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import {
  useActiveId,
  useActiveJobItem,
  useDebounce,
  useJobItems,
} from "../lib/hooks";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery, 350);
  const { jobItems, isLoading } = useJobItems(debouncedValue);

  const totalJobs = jobItems.length;
  const jobItemsSliced = jobItems.slice(0, 7);

  // reads the job ID from the URL
  const activeId = useActiveId();
  // uses job ID to fetch job from DB
  const { activeJob, dataLoading } = useActiveJobItem(activeId);

  return (
    <>
      <Background />

      <Header>
        <div className="header__top">
          <Logo />
          <BookmarksButton />
        </div>

        <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </Header>

      <Container>
        <Sidebar totalNumberOfJobs={totalJobs}>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>

        <JobItemContent activeJob={activeJob} isLoading={dataLoading} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
