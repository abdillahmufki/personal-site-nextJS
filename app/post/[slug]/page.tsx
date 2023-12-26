import { client } from "../../lib/sanity";
import { Post } from "../../lib/interface";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/app/lib/sanityImageUrl";

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const MyCodeFieldComponent = ({ value }: { value: any }) => {
  return (
    <pre>
      <code>{value.code}</code>
    </pre>
  );
};

const PortableTextComponent = {
  types: {
    image: ({ value }: { value: any }) => (
      <img
        src={urlFor(value).url()}
        alt="Image"
        width={600}
        height={300}
        className="rounded-lg w-max h-max"
      />
    ),
    code: ({ value }: { value: any }) => (
      <pre>
        <code>{value.code}</code>
      </pre>
    ),
    myCodeField: MyCodeFieldComponent,
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const data = (await getData(params.slug)) as Post;

  return (
    <article className="min-h-screen">
      <div className="divide-y flex pt-28 w-full justify-center flex-col bg-white dark:bg-slate-500 text-black">
        <header className="flex justify-center w-full border-b-2 border-blue-50 pb-4">
          <div className="space-y-1 text-center">
            <div className="space-y-10">
              <div>
                <p className="text-base font-medium leading-6 text-teal-500">
                  {new Date(data._createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900">
                {data.title}
              </h1>
            </div>
          </div>
        </header>
        <div className="divide-y divide-gray-10 dark:divide-gray-20 xl:divide-0">
          <div className="divide-y divide-gray-20 xl:col-span-3 xl:row-span-2 first-letter:">
            <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg p-10">
              <PortableText
                value={data.content}
                components={PortableTextComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
