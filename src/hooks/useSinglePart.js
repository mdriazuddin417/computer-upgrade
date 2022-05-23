import React, { useEffect, useState } from "react";
import fetcher from "../api/fetcher";

const useSinglePart = (id) => {
  const [part, setPart] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetcher.get(`/part/${id}`);
      setPart(res.data);
    })();
  }, [id]);
  return [part, setPart];
};

export default useSinglePart;
