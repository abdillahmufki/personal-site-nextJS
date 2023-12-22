import ImageUrlBuilder from "@sanity/image-url";
import { client } from "@/app/lib/sanity";

const builder = ImageUrlBuilder(client);
export const urlFor = (source: any) => {
  return builder.image(source);
};
