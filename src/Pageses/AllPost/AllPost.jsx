import { useQuery } from "@tanstack/react-query";
import React from "react";
import SmallSpinner from "../Shared/SmallSpinner/SmallSpinner";
import ShowAllPost from "./ShowAllPost";

const AllPost = () => {
  const {
    data: posts = [],

    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://linked-in-2-0-eight.vercel.app/posts");
      const data = res.json();
      return data;
    },
  });
  if (isLoading) {
    return <SmallSpinner />;
  }
  return (
    <div className=" justify-center flex flex-col lg:flex-row-reverse ">
      <div className="grid gap-6 grid-cols-1  my-6">
        {posts.map((posts) => (
          <ShowAllPost key={posts._id} posts={posts}></ShowAllPost>
        ))}
      </div>
    </div>
  );
};

export default AllPost;
