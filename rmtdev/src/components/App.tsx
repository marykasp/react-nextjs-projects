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
import { useActiveId, useJobItems } from "../lib/hooks";
import { useEffect, useState } from "react";
import { ActiveJobItem } from "../lib/types";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, jobItemsSliced } = useJobItems(searchQuery);
  const activeId = useActiveId();

  const [activeJob, setActiveJob] = useState<ActiveJobItem | null>(null);

  // useID to fetch specific game
  useEffect(() => {
    if (!activeId) return;
    fetch(
      `https://bytegrad.com/course-assets/projects/rmtdev/api/data/${activeId}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jobItem);
        setActiveJob(data.jobItem);
      });
  }, [activeId]);

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

        <JobItemContent activeJob={activeJob} />
      </Container>

      <Footer />
    </>
  );
}

export default App;
