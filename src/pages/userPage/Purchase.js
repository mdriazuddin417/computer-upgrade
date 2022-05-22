import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>This is Order Page id: {id}</h2>
    </div>
  );
};

export default Purchase;
