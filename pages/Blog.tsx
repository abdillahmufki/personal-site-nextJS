// Blog.js
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { client } from "../app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { Post } from "../app/lib/interface";
import Pagination from "@/components/Pagination";

async function getBlogPosts() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

function BlogPost({ post }: { post: Post }) {
  return (
    <Link
      href={`/post/${post.slug.current}`}
      key={post._id}
      className="container mx-auto px-4 lg:max-w-7xl mt-5">
      <div className="shadow-md flex flex-col gap-3 h-96 p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600 dark:hover:outline-1">
        <Image
          src={urlFor(post.image).url()}
          alt="Image"
          width={600}
          height={300}
          className="rounded-lg w-full h-[200px]"
        />
        <h2 className="dark:text-white text-black text-base font-semibold">
          {post.title}
        </h2>
        <p className="line-clamp-2 dark:text-white text-black text-sm">
          {post.overview}
        </p>
        <div className="flex justify-end items-center hover:text-blue-90">
          <p className="dark:text-white dark:hover:text-blue-50 text-gray-20 hover:text-blue-90">
            Read More
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="dark:text-white w-4 ml-2  text-gray-20 dark:hover:text-blue-50"
          />
        </div>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [data, setData] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogPosts();
      setData(blogData);
    }
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      className="flex my-10 justify-center items-center flex-col p-10"
      id="blog">
      <div className="text-center grid grid-cols-1 lg:mb-16 mb-5">
        <div className="flex flex-col gap-2">
          <h1 className="lg:text-4xl text-2xl text-gray-800 dark:text-white font-semibold">
            Article
          </h1>
          <p className="text-gray-600 dark:text-white text-sm">
            Read the latest articles that are still fresh and warm.
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 place-items-center md:grid-cols-2 sm:grid-cols-1 gap-3">
        {currentPosts.length === 0 ? (
          <div className="flex justify-center">
            <p className="text-gray-20 text-center font-semibold text-lg dark:text-white">
              Data is empty.
            </p>
          </div>
        ) : (
          currentPosts.map((post) => <BlogPost key={post._id} post={post} />)
        )}
      </div>
      <div className="flex justify-center mt-16 mb-10">
        <Pagination
          totalPages={Math.ceil(data.length / postsPerPage)}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
}
