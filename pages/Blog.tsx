import React from "react";
import { client } from "../app/lib/sanity";
import { Post } from "../app/lib/interface";
import CardBlog from "@/components/CardBlog";

async function getBlogPosts() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = (await getBlogPosts()) as Post[];
  console.log(data);
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div className="my-10">
        <h2 className="text-white text-4xl font-semibold">Article</h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
        {data.map((post) => {
          return (
            <div key={post._id}>
              <CardBlog
                title={post.title}
                overview={post.overview}
                src={post.image}
                alt={post.title}
                href={`/post/${post.slug.current}`}
                time={new Date(post._createdAt).toLocaleDateString()}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
