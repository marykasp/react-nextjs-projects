import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  children: React.ReactNode;
  totalNumberOfJobs: number;
};

export default function Sidebar({ children, totalNumberOfJobs }: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount totalNumberOfJobs={totalNumberOfJobs} />
        <SortingControls />
      </div>
      {children}
    </div>
  );
}

// export function SidebarTop({ children }: SidebarProps) {
//   return <div className="sidebar__top">{children}</div>;
// }
