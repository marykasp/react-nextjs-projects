import { useState } from "react";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import JobItemContent from "./JobItemContent";
import { JobItem } from "../lib/types";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [jobList, setJobList] = useState<JobItem[] | null>([]);

  return (
    <>
      <Background />

      <Header setJobList={setJobList} />

      <Container>
        <Sidebar jobList={jobList} />
        <JobItemContent />
      </Container>

      <Footer />
    </>
  );
}

export default App;
