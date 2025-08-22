import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";

type JobListProps = {
  jobList: JobItem[] | null;
};

export function JobList({ jobList }: JobListProps) {
  return (
    <ul className="job-list">
      {jobList
        ? jobList.map((job) => <JobListItem job={job} key={job.id} />)
        : null}
    </ul>
  );
}

export default JobList;
