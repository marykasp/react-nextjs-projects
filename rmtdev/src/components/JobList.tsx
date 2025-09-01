import { type JobItem } from "../lib/types";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";
import { useActiveId } from "../lib/hooks";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  // retrieve the active ID with custom hook, use to set prop of isActive to each job item in list
  const activeId = useActiveId();

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {jobItems
        ? jobItems.map((job) => (
            <JobListItem
              job={job}
              key={job.id}
              isActive={activeId === job.id}
            />
          ))
        : null}
    </ul>
  );
}
