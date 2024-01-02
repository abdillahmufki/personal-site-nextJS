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
  title: string;
  image: string;
  categories: any[];
  _id: string;
  _createdAt: string;
}
