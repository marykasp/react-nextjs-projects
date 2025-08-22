import { JobItem } from "../lib/types";
import JobList from "./JobList";
import Pagination from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  jobList: JobItem[];
};

export default function Sidebar({ jobList }: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>

      <JobList jobList={jobList} />
      <Pagination />
    </div>
  );
}
