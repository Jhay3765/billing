"use client";

import React from "react";
import { useState } from "react";
export default function billing() {
  const [cardNumber, setCardNumber] = useState<string>();
  const [name, setName] = useState<string>("Celeste Echols");
  const [exp, setExp] = useState<string>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.currentTarget.value);
  };
  const handleExpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExp(e.currentTarget.value);
  };
  return (
    <main className="  flex">
      <section className="bg w-full max-w-4xl  py-[470px] "></section>
      <section className="py-4 w-full flex items-center px-4 lg:px-24 gap-8 flex-col justify-center">
        <section className="flex mx-auto max-w-4xl w-full  gap-8 flex-wrap">
          <div className="rounded-lg card h-36 sm:h-48 w-full max-w-sm flex flex-col justify-between p-4 z-40 text-white">
            <section className="flex gap-8 sm:gap-24 justify-between">
              <p className="font-bold whitespace-nowrap">{name}</p>
              <p>{exp}</p>
            </section>
            <p className="sm:py-4  text-xl sm:text-2xl font-bold">
              {cardNumber}
            </p>
          </div>
          <div className="rounded-lg bg-slate-100 shadow-xl h-36 sm:h-48  w-full max-w-sm z-40">
            <div className="bg-gray-600 w-full h-8 my-4"></div>
            <div className="bg-gray-300 w-[100px] h-8 my-4"></div>
            <div className="bg-gray-300 w-[100px] h-2 my-4 mx-auto"></div>
          </div>
        </section>

        <form
          action=""
          className="max-w-2xl mx-auto font-bold  w-full  flex flex-col gap-4 [&>div>label]:py-2 [&>section>div>label]:py-2  "
        >
          <div className="flex flex-col ">
            <label htmlFor="">CARDHOLDER NAME</label>
            <input
              onChange={handleChange}
              placeholder="e.g Celeste Echols"
              type="text"
              className="px-2 py-2 border border-gray-500 rounded-md "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">CARD NUMBER</label>
            <input
              onChange={handleCardChange}
              pattern="[0-9]*"
              placeholder="eg 1234 5432 1999 2499"
              type="text"
              className="px-2 py-2 border border-gray-500 rounded-md"
            />
          </div>
          <section className="flex gap-4">
            <div className="flex flex-col max-w-[100px]">
              <label htmlFor="">EXP. DATE</label>
              <input
                onChange={handleExpChange}
                placeholder="MM/YY"
                type="text"
                className="px-2 py-2 border border-gray-500 rounded-md  max-w-[200px]"
              />
            </div>

            <div className="flex flex-col max-w-[120px] sm:max-w-none">
              <label htmlFor="">CVC</label>
              <input
                type="password"
                placeholder="e.g 123"
                className="px-2 py-2 border border-gray-500 rounded-md"
              />
            </div>
          </section>
          <button className="rounded-lg bg text-white w-full py-4 my-2">
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}
