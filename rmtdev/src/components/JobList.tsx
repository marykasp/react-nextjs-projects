import { type JobItem } from "../lib/types";
import Spinner from "./Spinner";
import JobListItem from "./JobListItem";

type JobListProps = {
  jobItems: JobItem[];
  isLoading: boolean;
};

export default function JobList({ jobItems, isLoading }: JobListProps) {
  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {jobItems
        ? jobItems.map((job) => <JobListItem job={job} key={job.id} />)
        : null}
    </ul>
  );
}
