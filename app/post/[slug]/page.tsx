import { client } from "../../lib/sanity";
import { Post } from "../../lib/interface";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanityImageUrl";
import Link from "next/link";
import Icon from "@/components/Icon";
import Newsletter from "@/components/Newsletter";
import Image from "next/image";

import { ICON_HERO } from "@/constants";

async function getData(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const PortableTextComponent = {
  types: {
    Image: ({ value }: { value: any }) => (
      <img
        src={urlFor(value).url()}
        alt="Image"
        width={600}
        height={300}
        className="rounded-lg w-max h-max"
      />
    ),
    code: ({ value }: { value: any }) => (
      <pre className="bg-white dark:bg-slate-950 shadow-sm">
        <code>{value.code}</code>
      </pre>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const data = (await getData(params.slug)) as Post;

    return (
      <>
        <article className="min-h-screen bg-white pt-12 px-5 dark:bg-slate-900">
          <div className="container">
            <div className="fixed left-48 top-60 flex flex-col gap-10 max-[528px]:hidden">
              {ICON_HERO.map((item, index) => (
                <Link target="_blank" href={item.href} key={index}>
                  <Icon icon={item.icon} />
                </Link>
              ))}
            </div>
            <div className="flex justify-center max-[528px]:flex-col gap-10">
              <div className="max-w-lg divide-y col-span-2 pt-10 w-full p-5 lg:w-[820px] justify-center flex-col dark:text-white  text-black">
                <header className="flex justify-center w-full border-b-2 border-blue-50 pb-4">
                  <div className="space-y-1 text-center">
                    <div className="space-y-10">
                      <div>
                        <p className="text-base font-medium leading-6 text-blue-90 dark:text-white">
                          {new Date(data._createdAt).toLocaleDateString(
                            "en-GB",
                            { day: "numeric", month: "short", year: "numeric" }
                          )}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-4xl text-start font-bold leading-tight tracking-tight dark:text-white text-gray-20">
                        {data.title}
                      </h1>
                    </div>
                  </div>
                </header>
                <div className="divide-y divide-gray-10 dark:divide-gray-20 xl:divide-0">
                  <div className="divide-y divide-gray-20 xl:col-span-3 xl:row-span-2 first-letter:">
                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg p-">
                      <PortableText
                        value={data.content}
                        components={PortableTextComponent}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divide-y pt-10 flex flex-col lg:w-[20%] w-full dark:text-white bg-white dark:bg-slate-900 text-black">
                <Newsletter />
              </div>
            </div>
          </div>
        </article>
      </>
    );
  } catch (error) {
    return <div>Error loading data</div>;
  }
}
