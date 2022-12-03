import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";


function Home() {
  return (
    <div className="h-max w-full grid">
      {/* <Transition /> */}
      <section className="w-full h-screen box-border">
        <div className="box-border w-max grid place-items-center relative top-[20%] mx-auto">
          <h1 className="text-lavender-600 font-bold font-sans my-2 text-2xl" content="Hi, I’m Alvin Setya Pranata">
            Hi, I’m Alvin Setya Pranata
          </h1>
          <h2 className="text-indigo-500 max-w-[300px] break-normal text-center text-xl font-[500] mb-4">
            A Student who like to develop Mobile, Web, and Desktop App
          </h2>
          <Button name="Hire Me" classname="mx-auto my-6 font-semibold" />
        </div>
      </section>

      <section className="grid place-items-center w-scren h-max py-12 px-6 bg-lavender-600">
        <h2 className="text-white font-bold text-2xl sticky">Projects</h2>
        <dir className="grid gap-y-12 place-items-center min-w-full py-8 px-2 box-border overflow-hidden">
          <img
            src="/sheetwriter.jpg"
            alt="picture"
            className="max-w-[250px] h-[180px] rounded-md object-fit aspect-auto"
          />
          <img
            src="sheetwriter.jpg"
            alt="picture"
            className="max-w-[250px] h-[180px] rounded-md object-fit aspect-auto"
          />
        </dir>
        <button className="px-6 py-4 mt-8 bg-white text-lavender-600 text-md rounded-md font-semibold">
          View More
        </button>
      </section>

      <section className="grid place-items-center w-screen bg-lavender-500 h-max py-12 px-1">
        <h2 className="max-w-[30ch] text-center text-xl text-white font-bold">
          I’m often working with frameworks such as
        </h2>
        <div className="grid place-items-center w-full box-border gap-y-20 mt-20">
          <Card
            img="/computer.jpg"
            title="React JS"
            desc="The most popular frontend framework in nowdays, i used it to make a fast and versatile web page"
          />
          <Card
            img="/phone.png"
            title="Flutter"
            desc="Framework that developed by Google, this framework comes with nice UI, cross platform and fast performance"
          />
          <Card
            img="server.png"
            title="Django"
            desc="This badboy framework has less code to help me to build backend system quickly and scallable"
          />
        </div>

        <h2 className="max-w-[40ch] text-center text-xl text-white font-bold mt-20">Programming languanges, tools and other frameworks that i used</h2>
        <div className="flex overflow-x-hidden box-border px-4 py-3 mt-10 bg-white gap-x-[20px] justify-evenly min-w-[90%] h-fit">
            <img src="/dart.png" className="w-[50px]" alt="image" />
            <img src="/go.png" className="w-[50px]" alt="image" />
            <img src="/python.png" className="w-[50px]" alt="image" />
            <img src="/tailwind.png" className="w-[50px]" alt="image" />
            <img src="/node.png" className="w-[50px]" alt="image" />
        </div>
      </section>

      <section className="grid p-12 bg-lavender-400">
        <h1 className="max-w-[20ch] text-2xl text-white font-bold">
          Interested to contribute with me?
        </h1>
        <h3 className="text-xl text-white font-semibold mt-8">Contact me at</h3>
        <div className="flex gap-x-10 mt-10">
          <button className="w-fit rounded-full">
            <img src="/gmail.png" alt="icon" />
          </button>
          <button className="w-fit rounded-full">
            <img src="/wa.png" alt="icon" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
