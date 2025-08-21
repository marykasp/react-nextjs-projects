import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../components/context/FeedbackItemsContextProvider";
import type { TFeedbackItem } from "./type";

export function useFeedbackItemsContext() {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not defined in FeedbackList component",
    );
  }
  return context;
}

// custom hook for Feedback Items
export function useFeedbackItems() {
  //
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
        );

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        console.log(error);
        setErrorMessage("Something went wrong. Please try again");
      }

      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return {
    feedbackItems,
    isLoading,
    errorMessage,
  };
}
