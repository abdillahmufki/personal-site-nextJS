import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DataCard {
  title?: string;
  overview: string;
  src?: string;
  alt: string;
  href: string;
  time: string;
}

const CardBlog = ({ title, overview, src, alt, href, time }: DataCard) => {
  return (
    <div className="card w-96 h-full bg-base-100 shadow-xl">
      <figure>
        {src ? (
          <Image
            src={src}
            width={100}
            height={100}
            className="w-full h-36"
            alt={alt}
          />
        ) : null}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{overview}</p>
        <p>{time}</p>
        <Link href={href} className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default CardBlog;
