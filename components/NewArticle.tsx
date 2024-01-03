"use client";

import React, { useState, useEffect } from "react";
import { client } from "../app/lib/sanity";
import { Post } from "../app/lib/interface";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getBlogPosts() {
  try {
    const query = `*[_type == "post"]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
}

export default function NewArticle() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogData = await getBlogPosts();
        setData(blogData);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }
    fetchData();
  }, []);

  return (
    <div className="h-max rounded-2xl bg-white dark:bg-slate-800 shadow-md w-auto">
      <header>
        <h1 className="text-2xl font-bold p-4 tracking-tight border-b dark:text-white dark:border-slate-700">
          🔥 Artikel Terbaru
        </h1>
      </header>

      <div className="flex justify-between flex-col items-center gap-2">
        {data.map((post) => (
          <Link href={`/post/${post.slug.current}`} key={post._id}>
            <NewBlog post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
}

const NewBlog = ({ post }: { post: Post }) => {
  return (
    <div className="hover:bg-slate-100 h-24 dark:hover:bg-slate-700 active:scale-95 active:rounded-xl transition-all w-full">
      <div className="flex justify-center">
        <div className="grid grid-cols-12 place-content-center place-items-center p-5">
          <div className="col-span-8  justify-center flex flex-col">
            <h1 className="text-sm text-gray-20 dark:text-white line-clamp-2 font-semibold">
              {post.overview}
            </h1>
            <p className="text-[0.5rem] text-gray-20 dark:text-gray-400">
              {new Date(post._createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="col-span-4">
            <Image
              src={urlFor(post.tech).url()}
              width={40}
              height={40}
              alt={`Gambar ${post.title}`}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
