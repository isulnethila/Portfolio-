import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import {BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import profileImage from "../assets/q.jpg"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div>
    <Head>
      <title>Portfolio website</title>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
</style>
    </Head>
    <main className="font-poppins bg-yellow-50 min-h-screen px-10">
      <section>
        {/* nav */}
        <nav className="py-10 flex justify-between">
          <h1 className=" text-sm">Developed by isul</h1>
          <ul className="flex items-center">
            <li className=" cursor-pointer text-xl mx-5" >
              <BsFillMoonStarsFill/>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1UY3xkiO2Z6nUKQu5L2jpMobMuzHm3_ff/view?usp=sharing" 
              className=" bg-yellow-400 py-2 px-5 text-black border-none rounded-2xl"
              download={"resume"}>Resume</a>
            </li>
          </ul>
        </nav>
        {/* hero */}
        <div className=" text-center p-10">
          <h1 className=" text-5xl text-yellow-400 font-bold">Isul nethila kariyawasam</h1>
          <h3 className="text-2xl py-4">Mobile Apps and website developer</h3>
          <p className="text-sm text-gray-400 leading-6">I am a passionate Mobile App and Website Developer with a strong foundation in React Native, Java, and web technologies. I specialize in creating user-friendly mobile applications and responsive websites that deliver seamless experiences. With a keen eye for design and functionality, I develop efficient, scalable, and high-performance applications.

Currently, I am building projects that enhance my skills in mobile and web development, including a currency converter app and a multi-page website with navigation. I am always eager to learn and take on new challenges to improve my expertise.</p>
        </div>
        {/* socilas */}
        <div className="flex text-5xl justify-center gap-16 text-gray-600">
          <a href="https://github.com/isulnethila"><FaGithub/></a>
          <a href="https://www.facebook.com/nethila.kari"><FaFacebook/></a>
          <a href="https://www.linkedin.com/in/isul-nethila-0740a1319/"><FaLinkedin/></a>
          </div>
        <div className="m-auto relative  bg-gradient-to-b from-gray-500 w-80 h-80 p-5 mt-20 rounded-full" >
          <Image
            className=" rounded-full"
            src={profileImage}
            alt="profile photo"
            objectFit="cover"
          />

        </div>
      </section>
    </main>
   </div>
  );
}
