import { createClient } from "next-sanity";

const projectId = "3m6hsdp9";
const dataset = "production";
const apiVersion = "2022-03-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
