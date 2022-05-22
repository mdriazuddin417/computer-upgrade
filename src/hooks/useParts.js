import axios from "axios";
import { useEffect, useState } from "react";

const useParts = () => {
  const [parts, setParts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("parts.json");
      if (res) {
        setParts(res.data);
      }
    })();
  }, []);

  return [parts, setParts];
};

export default useParts;
