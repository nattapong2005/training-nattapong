import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="bg w-full min-h-screen ">
        <div className="flex flex-col mb-2 justify-center items-center gap-y-2 text-white">
          <h1 className="text-7xl font-bold">NVC Training Center</h1>
          <h1 className="text-4xl ">สถาบันสอนคอมพิวเตอร์และเทคโนโลยีดิจิทัล</h1>
          {/* <img src="./img/home-bg.jpg" alt="" /> */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
