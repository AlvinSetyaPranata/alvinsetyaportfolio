import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="h-screen w-screen">
      <section className="my-[50px] h-[50%] w-full">
        <div className="box-border w-max grid place-items-center relative left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className="text-white font-bold font-sans my-2 text-2xl bg-lavender-600">
            Hi, I’m Alvin Setya Pranata
          </h1>
          <h2 className="text-indigo-500 w-[300px] break-normal text-center text-xl font-[500]">
            A Student who like to develop Mobile, Web, and Desktop App
          </h2>
          <Button name="Hire Me" classname="mx-auto my-6" />
        </div>
      </section>

      <section className="grid place-items-center w-scren h-max py-12 px-6 bg-lavender-600">
        <h2 className="text-white font-bold text-2xl sticky">Projects</h2>
        <dir className="grid gap-y-12 place-items-center min-w-full py-8 px-2 box-border overflow-hidden">
          <img
            src="../../../public/sheetwriter.jpg"
            alt="picture"
            className="max-w-[350px] h-[250px] rounded-md object-fit aspect-auto"
          />
          <img
            src="../../../public/sheetwriter.jpg"
            alt="picture"
            className="max-w-[350px] h-[250px] rounded-md object-fit aspect-auto"
          />
        </dir>
        <button className="px-6 py-4 mt-8 bg-white text-lavender-500 text-md rounded-md font-semibold">
          View More
        </button>
      </section>

      <section className="grid place-items-center w-screen bg-lavender-500 h-max py-12">
        <h2 className="max-w-[30ch] text-center text-2xl text-white font-bold">
          I’m often working with frameworks such as
        </h2>
        <div className="grid place-items-center w-full box-border gap-y-20 mt-20">
          <Card
            img="../../../public/computer.jpg"
            title="React JS"
            desc="The most popular frontend framework in nowdays, i used it to make a fast and versatile web page"
          />
          <Card
            img="../../../public/phone.png"
            title="Flutter"
            desc="Framework that developed by Google, this framework comes with nice UI, cross platform and fast performance"
          />
          <Card
            img="../../../public/server.png"
            title="Django"
            desc="This badboy framework has less code to help me to build backend system quickly and scallable"
          />
        </div>
      </section>

      <section className="grid p-12 bg-lavender-400">
        <h1 className="max-w-[20ch] text-2xl text-white font-bold">
          Interested to contribute with me?
        </h1>
        <h3 className="text-xl text-white font-semibold mt-8">Contact me at</h3>
        <div className="flex gap-x-10 mt-10">
          <button className="w-fit rounded-full">
            <img src="../../../public/gmail.png" alt="icon" />
          </button>
          <button className="w-fit rounded-full">
            <img src="../../../public/wa.png" alt="icon" />
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
