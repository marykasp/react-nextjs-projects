import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type SidebarProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>
      {children}
    </div>
  );
}

// export function SidebarTop({ children }: SidebarProps) {
//   return <div className="sidebar__top">{children}</div>;
// }
