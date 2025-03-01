import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import {BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
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
        <div>
          <h1>Isul nethila kariyawasam</h1>
          <h3>Mobile Apps and website developer</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, sint reprehenderit, ad autem voluptates enim doloribus dolores quaerat nemo sequi facere voluptatum officiis nesciunt tenetur? Dignissimos voluptas similique aperiam voluptate?</p>
        </div>
        {/* socilas */}
        <div>
          <a href="https://github.com/isulnethila"><FaGithub/></a>
          <a href="https://www.facebook.com/nethila.kari"><FaFacebook/></a>
          <a href="https://www.linkedin.com/in/isul-nethila-0740a1319/"><FaLinkedin/></a>
          </div>
      </section>
    </main>
   </div>
  );
}
