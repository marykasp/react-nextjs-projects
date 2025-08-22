import { JobItem } from "../lib/types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type JobListProps = {
  jobList: JobItem[] | null;
  isLoading: boolean;
};

export default function JobList({ jobList, isLoading }: JobListProps) {
  // slice job items to only return 10 jobs
  const shortJobList = jobList?.slice(0, 7);

  return (
    <ul className="job-list">
      {isLoading && <Spinner />}

      {shortJobList
        ? shortJobList.map((job) => <JobListItem job={job} key={job.id} />)
        : null}
    </ul>
  );
}
