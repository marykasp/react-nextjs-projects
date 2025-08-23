import { useState, useEffect } from "react";
import { JobItem } from "./types";

export function useJobItems(searchQuery: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobItems, setJobItems] = useState<JobItem[]>([]);

  // slice job items to only return 10 jobs
  const jobItemsSliced = jobItems.slice(0, 7);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchQuery}`,
        );
        const data = await response.json();

        setIsLoading(false);
        setJobItems(data.jobItems);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return { isLoading, jobItems, jobItemsSliced };
}
