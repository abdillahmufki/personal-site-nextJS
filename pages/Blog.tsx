import React from "react";
import { client } from "../app/lib/sanity";
import { Post } from "../app/lib/interface";
import CardBlog from "@/components/CardBlog";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getBlogPosts() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = (await getBlogPosts()) as Post[];

  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div className="text-center grid grid-cols-1 lg:mb-16 mb-5">
        <h1 className="lg:text-4xl text-2xl text-gray-800 dark:text-white font-semibold">
          Article
        </h1>
        <p className="text-gray-600 dark:text-white text-sm">My Introduction</p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {data.length < 1 ? (
          <div>Data kosong</div>
        ) : (
          data.map((post) => (
            <CardBlog
              key={post._id}
              title={post.title}
              overview={post.overview}
              src={urlFor(post.image).url()}
              alt={post.title}
              href={`/post/${post.slug.current}`}
              time={new Date(post._createdAt).toLocaleDateString()}
            />
          ))
        )}
      </div>
    </div>
  );
}
