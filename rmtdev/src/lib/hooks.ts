import { useState, useEffect } from "react";
import { ActiveJobItem, JobItem } from "./types";

// fetches list of jobs from server using the searchQuery
export function useJobItems(searchQuery: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [jobItems, setJobItems] = useState<JobItem[]>([]);

  // slice job items to only return 10 jobs
  const jobItemsSliced = jobItems.slice(0, 7);
  // number of jobs returned
  const totalJobs = jobItems.length;

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

  return { isLoading, jobItems, jobItemsSliced, totalJobs };
}

// reads the job ID from the URL
export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      console.log(window.location.hash.slice(1));
      const id = +window.location.hash.slice(1);
      setActiveId(id);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export function useActiveJobItem(id: number | null) {
  const [activeJob, setActiveJob] = useState<ActiveJobItem | null>(null);
  const [dataLoading, setDataLoading] = useState(false);

  // useID to fetch specific game
  useEffect(() => {
    if (!id) return;

    const fetchActiveJob = async () => {
      setDataLoading(true);
      const response = await fetch(
        `https://bytegrad.com/course-assets/projects/rmtdev/api/data/${id}`,
      );
      const data = await response.json();

      setDataLoading(false);
      console.log(data.jobItem);
      setActiveJob(data.jobItem);
    };

    fetchActiveJob();
  }, [id]);

  return { activeJob, dataLoading };
}

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>("");

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);

    () => clearInterval(timerId);
  }, [value, delay]);

  return debouncedValue;
}
