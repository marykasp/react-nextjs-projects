import { useEffect, useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar, { SidebarTop } from "./Sidebar";
import JobItemContent from "./JobItemContent";
import BookmarksButton from "./BookmarksButton";
import Logo from "./Logo";
import SearchForm from "./SearchForm";
import { JobItem } from "../lib/types";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";
import JobList from "./JobList";
import Pagination from "./PaginationControls";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobList, setJobList] = useState<JobItem[] | null>([]);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchQuery}`,
      );
      const data = await response.json();

      setJobList(data.jobItems);
    };

    fetchData();
  }, [searchQuery]);

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
          <SidebarTop>
            <ResultsCount />
            <SortingControls />
          </SidebarTop>

          <JobList jobList={jobList} />
          <Pagination />
        </Sidebar>

        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
