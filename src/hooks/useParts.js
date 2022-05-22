import { useEffect, useState } from "react";
import fetcher from "../api/fetcher";
const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetcher.get("/all-parts");
      if (res) {
        setParts(res.data);
      }
    })();
  }, []);

  return [parts, setParts];
};

export default useParts;
