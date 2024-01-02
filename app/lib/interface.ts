export interface Post {
  mainImage(mainImage: any): unknown;
  title: string;
  overview: string;
  code: string;
  image?: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  };
  _createdAt: string;
}

export interface Project {
  description: string;
  link: string;
  src: string;
  title: string;
  image: string;
  categories: string[];
  _id: string;
  _createdAt: string;
}
