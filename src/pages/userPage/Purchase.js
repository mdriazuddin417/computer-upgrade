import React from "react";
import { useParams } from "react-router-dom";
import useSinglePart from "../../hooks/useSinglePart";

const Purchase = () => {
  const { id } = useParams();

  const [part, setPart] = useSinglePart(id);
  const { name, price, image, text, min, max } = part;
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
      <div></div>
      <div></div>
    </div>
  );
};

export default Purchase;
