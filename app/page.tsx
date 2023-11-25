import Image from "next/image";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <section>
          {" "}
          <Image
            src="/profileMufki.png"
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold mt-4">
            Abdillah Mufki Auzan Mubin
          </h1>
          <p className="text-2xl mt-2">Software Engineer</p>
        </section>
        <Project />
      </div>
    </main>
  );
}
