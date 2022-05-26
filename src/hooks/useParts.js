import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../component/Loading";

import fetcher from "../api/fetcher";
const useParts = () => {
  const { data: parts, isLoading } = useQuery(
    "parts",
    async () => await fetcher.get("/all-parts")
  );
  if (isLoading) {
    <Loading />;
  }

  return [parts];
};

export default useParts;
