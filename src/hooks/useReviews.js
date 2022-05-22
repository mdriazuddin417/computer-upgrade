import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/all-reviews");
      if (res) {
        setReviews(res.data);
      }
    })();
  }, []);
  return [reviews, setReviews];
};

export default useReviews;
