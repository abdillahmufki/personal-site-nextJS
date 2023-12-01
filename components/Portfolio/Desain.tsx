import React from "react";
import Link from "next/link";
import Image from "next/image";
const HomeProduct = () => {
  const products = [
    {
      link: "/aloha",
      imageUrl: "/project/bolabol.jpg",
      title: "Bed Cover",
      text: "Aloha",
    },
    {
      link: "/illusion",
      imageUrl: "/project/bolabol.jpg",
      title: "Sarung Kasur",
      text: "Illusions",
    },
    {
      link: "/internal",
      imageUrl: "/project/bolabol.jpg",
      title: "Selimut",
      text: "Internal",
    },
    {
      link: "/ladyrose",
      imageUrl: "/project/bolabol.jpg",
      title: "Karpet",
      text: "Lady Rose",
    },
    {
      link: "/rainbow",
      imageUrl: "/project/bolabol.jpg",
      title: "Sprei",
      text: "Rainbow",
    },
    {
      link: "/valeryquincy",
      imageUrl: "/project/bolabol.jpg",
      title: "Keset",
      text: "Vallery Quincy",
    },
  ];

  return (
    <div className="my-10 flex justify-center lg:my-20 p-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
        {products.map((product, index) => (
          <div key={index}>
            <div className="p-1">
              <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                <Link
                  href={product.link}
                  className="lightbox tobii-zoom transition-all duration-500 hover:brightness-50 group-hover:scale-105">
                  <Image
                    width={450}
                    height={300}
                    alt="img"
                    src={product.imageUrl}
                  />
                </Link>
                <div className="absolute -bottom-52 left-2 right-2 rounded  p-4 transition-all duration-500 group-hover:bottom-2 bg-transparent">
                  <a
                    href={product.link}
                    className="hover:text-primary-600 text-white dark:white text-lg font-medium transition duration-500">
                    {product.title}
                  </a>
                  <h6 className="text-gray-20 dark:text-white">
                    {product.text}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
