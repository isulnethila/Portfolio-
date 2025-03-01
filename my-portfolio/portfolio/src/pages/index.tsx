import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import {BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import profileImage from "../assets/q.jpg";
import graphicDesining from "../assets/design.png";
import code from "../assets/code.png";
import web from "../assets/web.png";
import web1 from "../assets/web1.png"
import web2 from "../assets/web2.png"
import web3 from "../assets/web4.png"
import web4 from "../assets/web5.png"

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
      {/* services */}
      <section>
        <h2 className="text-5xl opacity-65 font-bold py-10">Service I offer</h2>
        <p className="text-sm text-gray-400 leading-6"> offer professional mobile app and website development services, specializing in React Native for cross-platform apps and responsive web solutions. My expertise includes UI/UX implementation, API integration, performance optimization, and bug fixing to ensure smooth functionality. Whether you need a new app, a dynamic website, or enhancements to an existing project, I am committed to delivering high-quality solutions tailored to your needs. Let's build something great together! </p>

        {/* services cards */}
        <div>
          {/* card1 */}
          <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src={graphicDesining}
                alt="Graphic Desinging"
                width={100}
                height={100}
                className=" inline"
              />
              <h2 className="text-2xl font-bold">Graphic Designing</h2>
              <p className="text-sm text-gray-700 py-2 leading-6">I create visually appealing designs that enhance brand identity and user experience. My services include logo design, social media graphics, UI/UX elements, and marketing materials. With a focus on creativity and detail, I bring ideas to life through clean and engaging designs.</p>
          </div>
          <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src={code}
                alt="Graphic Desinging"
                width={100}
                height={100}
                className=" inline"
              />
              <h2 className="text-2xl font-bold">Application development</h2>
              <p className="text-sm text-gray-700 py-2 leading-6">I develop high-quality mobile and web applications tailored to your needs. Specializing in React Native and modern web technologies, I create user-friendly, efficient, and scalable applications with seamless functionality and intuitive design.</p>
          </div>
          <div className="bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
              <Image
                src={web}
                alt="Graphic Desinging"
                width={100}
                height={100}
                className=" inline"
              />
              <h2 className="text-2xl font-bold">web development</h2>
              <p className="text-sm text-gray-700 py-2 leading-6">I build responsive and dynamic websites tailored to your needs. Using modern web technologies, I create fast, user-friendly, and visually appealing websites that provide a seamless experience across all devices.</p>
          </div>
        </div>
      </section>
      {/* my work */}
      <section>
        <div>
          <h2>Potfolio</h2>
          <p className="text-sm text-gray-400 leading-6">I showcase my work through high-quality visuals, including app screenshots, website designs, and graphic samples. From intuitive mobile apps to responsive websites and eye-catching graphics, my portfolio reflects my skills in creating functional and visually appealing digital solutions.</p>
        </div>
      </section>
    </main>
   </div>
  );
}
