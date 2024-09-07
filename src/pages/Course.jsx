import React from "react";
import Layout from "../components/Layout";
import Card from "./Card";

const Course = () => {
  const course = [
    {
      img: "basic-react-native.png",
      name: "Basic React Native",
      time: "5",
      price: "7500",
    },

    {
      img: "powerbi-dashboard.png",
      name: "Power BI Dashboard",
      time: "5",
      price: "5500",
    },

    {
      img: "ui-design-with-figma.png",
      name: "UI Design with Figma",
      time: "5",
      price: "5000",
    },

    {
      img: "cross-platform-with-flutter.png",
      name: "Cross Platform with Flutter",
      time: "5",
      price: "6500",
    },
  ];

  return (
    <Layout>
      <div className="container flex justify-between items-center flex-col sm:flex-row md:flex-row mx-auto mt-10 space-y-5 sm:space-x-0">
        <h1 className="text-4xl font-bold">หลักสูตรที่เปิดสอน</h1>
        <div class="relative w-64">
            <input
              type="text"
              placeholder="ค้นหาคอร์ส .."
              className="pr-10 pl-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent w-full"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
      </div>

      <div className="container mx-auto flex flex-col justify-center items-center">
        {/* Show card from Card.jsx */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-4 ">
          {course.map((c) => (
            <Card key={c.name} {...c} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Course;
