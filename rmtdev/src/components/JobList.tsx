import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";

type JobListProps = {
  jobList: JobItem[];
};

export function JobList({ jobList }: JobListProps) {
  return (
    <ul className="job-list">
      {jobList.map((job) => (
        <JobListItem job={job} key={job.id} />
      ))}
    </ul>
  );
}

export default JobList;
