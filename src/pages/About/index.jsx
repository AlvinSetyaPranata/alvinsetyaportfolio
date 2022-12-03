import { motion } from "framer-motion";
import React from "react";

function About() {
  const variants = {
    animate: (custom) => ({
      y: ["0px", "-10px"],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
        delay: custom * 0.2,
      },
    }),
  };

  return (
    <div className="w-full h-max box-border">
      <section className="h-screen box-border">
        <div className="box-border w-full grid grid-cols-2 place-items-center relative top-[30%] px-2">
          <h1 className="text-xl max-w-[40ch] text-center font-bold mb-[10px] text-lavender-600 col-span-2">
            “Every time is the perfect time, let tomorrow be sunrise and let
            yesterday be starlight”
          </h1>
          <span className="font-bold relative right-0 text-md p-2 text-slate-500 col-end-3 min-w-max">
            ~ Alvin Setya Pranata
          </span>
        </div>
      </section>
      <section className="h-max bg-lavender-600 pt-4 overflow-hidden box-bordertext-white">
        <h1 className="text-center text-xl font-bold text-white">Interest</h1>
        <div className="grid h-full place-items-center py-6 gap-y-[50px]">
          <div className="px-6 py-4 w-fit max-w-[250px] flex flex-col justify-center item-center">
            <img
              className="mb-[15px] w-[90px]"
              src="/server2.png"
              alt="image"
            />
            <p className="text-lg text-center font-semibold text-white">Backend</p>
          </div>
          <div className="px-4 py-4 w-fit flex justify-center items-center flex-col">
            <img
              className="mb-[15px] h-[90px]"
              src="/phone2.png"
              alt="image"
            />
            <p className="text-lg text-center font-semibold text-white">Android</p>
          </div>
          <div className="px-4 py-4 w-fit max-w-[150px]">
            <img
              className="mb-[15px] w-[90px]"
              src="/website.png"
              alt="image"
            />
            <p className="text-lg text-center font-semibold text-white">Website</p>
          </div>
          <div className="px-4 py-4 w-fit max-w-[150px]">
            <img
              className="mb-[15px] w-[90px]"
              src="/desktop.png"
              alt="image"
            />
            <p className="text-lg text-center font-semibold text-white">Desktop</p>
          </div>
        </div>
      </section>

      <section className="h-max w-full bg-lavender-500 p-6 grid gap-y-[40px]">
        <div className="text-white">
          <h2 className="font-bold text-xl mb-4">Background</h2>
          <p className="text-lg">
            when i was in high school i interested with the computer things,
            because i more like working as teamwork. so i decide to learn about
            programing languanges, the first programing languange that i used is
            python, it because python is user-friendly, which mean it easy to
            understand and read the code. and then i’m starting to learn other
            programing languange such as JavaScript, Golang and Dart. also i
            learn more depth about frameworks and tools to support development.
          </p>
        </div>
        <div className="text-white">
          <h2 className="font-bold text-xl mb-4">Experiences</h2>
          <p className="text-lg">
            Won at 3rd place in the web field at Muhammadiyah University
            festival expo with my team, 3rd place in the Madura contest robot
            competition with my team, 3rd place in a chess competition, and 6th
            place in a computer interactive competition when I was in
            kindergarten. and as a freelancer
          </p>
        </div>
      </section>
      <section className="h-screen w-screen bg-lavender-400 py-6 px-4">
        <h2 className="font-white font-bold text-xl text-white text-center mb-[40px]">
          My Hobby
        </h2>
        <div className="relative max-w-[400px] box-border">
          <p className="font-semibold text-lg text-white">Watching Anime</p>
          <motion.img
            src="/bahamut.png"
            className="w-[90px] absolute left-[20%] top-[50px] z-[1]"
            animate="animate"
            variants={variants}
            custom={0}
            whileHover={{ scale: 1.3, "z-index": "10" }}
          />
          <motion.img
            src="/isekaismartphone.png"
            className="w-[90px] absolute left-[40%] top-[100px] z-[2]"
            animate="animate"
            variants={variants}
            custom={1}
            whileHover={{ scale: 1.3, "z-index": "10" }}
          />
          <motion.img
            src="/datealive.png"
            className="w-[100px] absolute left-[15%] top-[200px]  z-[3]"
            animate="animate"
            variants={variants}
            custom={2}
            whileHover={{ scale: 1.3, "z-index": "10" }}
          />
          <motion.img
            src="/tensei.png"
            className="w-[100px] absolute right-[15%] top-[150px] z-[1]"
            animate="animate"
            variants={variants}
            custom={3}
            whileHover={{ scale: 1.3, "z-index": "10" }}
            whileTap={{ 'scaleX': -1}}
          />
        </div>
      </section>
    </div>
  );
}

export default About;
