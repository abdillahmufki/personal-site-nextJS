import { client } from "../app/lib/sanity";
import { Post } from "../app/lib/interface";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

async function getBlogPosts() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

export default async function Blog() {
  const data = (await getBlogPosts()) as Post[];

  return (
    <>
      <div
        className="flex my-10 justify-center items-center flex-col p-10"
        id="blog">
        <div className="text-center grid grid-cols-1 lg:mb-16 mb-5">
          <div className="flex flex-col gap-2">
            {" "}
            <h1 className="lg:text-4xl text-2xl text-gray-800 dark:text-white font-semibold">
              Article
            </h1>
            <p className="text-gray-600 dark:text-white text-sm">
              Read the latest articles that are still fresh and warm.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 place-items-center md:grid-cols-2 sm:grid-cols-1 gap-3">
          {data.length === 0 ? (
            <div className="flex justify-center">
              <p className="text-gray-20 text-center font-semibold text-lg dark:text-white">
                Data is empty.
              </p>
            </div>
          ) : (
            data.map((post) => (
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
                  <div className="flex justify-end items-center ">
                    <p className="dark:text-white  text-blue-50 dark:hover:text-blue-50">
                      Read More
                    </p>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className=" w-4 ml-2 dark:text-white text-blue-50 dark:hover:text-blue-50"
                    />
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}
