import React from "react";
import Layout from "../components/Layout";
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <section className="bg w-full min-h-screen ">
        <div className="flex h-screen flex-col mb-2 justify-center items-center gap-y-2 text-white">
          <h1 className="text-7xl font-bold">NVC Training Center</h1>
          <h1 className="text-3xl font-bold ">สถาบันสอนคอมพิวเตอร์และเทคโนโลยีดิจิทัล</h1>
          <NavLink className='w-96 bg-blue-300 text-white p-5 text-2xl font-bold rounded-full text-center' to='/course'>ลงทะเบียนเรียน</NavLink>
          {/* <img src="./img/home-bg.jpg" alt="" /> */}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
