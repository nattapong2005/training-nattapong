import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm shadow-md hover:shadow-2xl bg- cursor-pointer rounded-xl">
      <img
        className="w-full object-cover h-80 rounded-t-xl"
        src={`img/${props.img}`}
      />
      <div className="p-5">
        <h1 className="text-xl font-bold">{props.name}</h1>
        <div className="flex justify-between mt-1">
          <h1 className="text-lg">ระยะเวลา {props.time} วัน</h1>
          <h1 className="text-lg">
            ราคา <span className="font-bold">{props.price}</span> บาท
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="w-64 bg-blue-800 text-white p-2 mb-5 rounded-3xl">
          ลงทะเบียน
        </button>
      </div>
    </div>
  );
};

export default Card;
