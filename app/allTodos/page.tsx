import { Button } from "@/components/ui/button";
import React from "react";
import { fetchTitle } from "@/lib/actions/titleAction";
import TodoCard from "@/components/card/TodoCard";

const AllTodos = async () => {
  const titleDetails = await fetchTitle();
  return (
    <>
      <div className="flex flex-wrap">
        {titleDetails.map((titles) => (
          <TodoCard
            title={titles.title}
            titleId={titles._id}
            key={titles._id}
          />
        ))}
      </div>
    </>
  );
};

export default AllTodos;
