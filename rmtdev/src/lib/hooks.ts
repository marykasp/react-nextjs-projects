import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
// import { BASE_API_URL } from "./constants";
import { ActiveJobItem, JobItem } from "./types";

type JobItemApiResponse = {
  public: boolean;
  jobItem: ActiveJobItem;
};

type JobItemsApiResponse = {
  public: boolean;
  sorted: boolean;
  jobItems: JobItem[];
};

const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/rmtdev/api/data/${id}`,
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description);
  }
  const data = await response.json();
  return data;
};

const fetchJobItems = async (
  searchText: string,
): Promise<JobItemsApiResponse> => {
  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`,
  );
  const data = await response.json();
  return data;
};

// ------------------------------------------------------
export function useActiveJobItem(id: number | null) {
  const { data, isInitialLoading } = useQuery(
    ["job-item", id], // query keys
    () => (id ? fetchJobItem(id) : null),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const activeJob = data?.jobItem;
  const dataLoading = isInitialLoading;
  return { activeJob, dataLoading };
}

export function useJobItems(searchQuery: string) {
  const { data, isInitialLoading } = useQuery(
    ["job-items", searchQuery],
    () => (searchQuery ? fetchJobItems(searchQuery) : null),
    {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error) => {
        console.log(error);
      },
    },
  );

  const jobItems = data?.jobItems;
  const isLoading = isInitialLoading;

  return { jobItems, isLoading };
}

// fetches list of jobs from server using the searchQuery
// export function useJobItems(searchQuery: string) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [jobItems, setJobItems] = useState<JobItem[]>([]);

//   useEffect(() => {
//     if (!searchQuery) return;

//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetch(
//           `https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchQuery}`,
//         );
//         const data = await response.json();

//         setIsLoading(false);
//         setJobItems(data.jobItems);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, [searchQuery]);

//   return { isLoading, jobItems };
// }

// -----------------------------------------------
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

// ------------------------------------------------------

export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}
