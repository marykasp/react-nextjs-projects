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
import { useJobItems } from "../lib/hooks";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [activeId, setActiveId] = useState(0);

  const { isLoading, jobItemsSliced } = useJobItems(searchQuery);

  // use activeID to fetch that specific job

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
        <Sidebar>
          <JobList jobItems={jobItemsSliced} isLoading={isLoading} />
          <Pagination />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
