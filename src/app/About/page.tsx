import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Page",
}

export default function About() {
  return (
    <>
       

      <div className="pt-16 bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="w-full max-w-5xl p-5 bg-white shadow-lg rounded-lg mx-auto">
          <h1
            id="About"
            className="text-center text-sunset-500 text-5xl font-bold font-serif mb-10"
          >
            About Me
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              className="rounded-lg shadow-md"
              src="/work.jpg"
              alt="Profile Image"
              width={300}
              height={300}
            />
            <p className="text-slate-800 text-xl italic font-serif leading-relaxed text-left sm:text-lg md:text-xl">
              Hello! I &apos;m a web developer and aspiring Generative Cloud AI Engineer with a passion 
              for building cutting-edge solutions. With expertise in web development and a keen 
              interest in AI and cloud technology, I &apos;m always looking to push the boundaries of
              what&apos;s possible. I&apos;m also a graphic designer, bringing a creative touch to my work.
                Let&apos;s explore the intersection of technology and innovation together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}