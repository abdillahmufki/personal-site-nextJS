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
