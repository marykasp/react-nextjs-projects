// import JobItemContent from "./JobItemContent";
// import Sidebar from "./Sidebar";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
