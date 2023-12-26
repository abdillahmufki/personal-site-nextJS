import React from "react";
import Image from "next/image";
import Link from "next/link";

interface DataCard {
  title?: string;
  overview: string;
  src: string;
  alt: string;
  href: string;
  time: string;
}

const CardBlog = ({ title, overview, src, alt, href, time }: DataCard) => {
  return (
    <>
      <Link href={href}>
        <div className="card w-72 h-96 bg-base-100 shadow-xl">
          <figure>
            {
              <Image
                src={src}
                width={288}
                height={164}
                className="h-[164px] w-[288px]"
                alt={alt}
              />
            }
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg">{title}</h2>
            <p className="line-clamp-2 text-sm">{overview}</p>
            <p className="text-sm">{time}</p>
            <Link
              href={href}
              className="card-actions text-sm flex items-center justify-end hover:text-blue-50">
              Read More{" "}
              <Image alt="icon" src="/icon/arrow.svg" width={20} height={20} />
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardBlog;
