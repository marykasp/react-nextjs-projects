export default function ResultsCount({
  totalNumberOfJobs,
}: {
  totalNumberOfJobs: number;
}) {
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfJobs}</span> results
    </p>
  );
}
