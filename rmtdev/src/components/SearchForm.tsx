import { useEffect, useState } from "react";
import { type JobItem } from "../lib/types";

// {"id":345634575475476,"title":"Node.js Software Engineer","badgeLetters":"PT","company":"PredICT","relevanceScore":1999,"daysAgo":4}

type SearchFormType = {
  onSetJobList: (jobs: JobItem[]) => void;
};

export default function SearchForm({ onSetJobList }: SearchFormType) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchQuery) return;

    // fetch data with searchQuery
    fetch(
      `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchQuery}`,
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.jobItems);

        // set job list to state
        onSetJobList(data.jobItems);
      });
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search">
      <button type="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        spellCheck="false"
        type="text"
        required
        placeholder="Find remote developer jobs..."
      />
    </form>
  );
}
