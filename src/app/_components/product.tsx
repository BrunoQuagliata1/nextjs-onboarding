"use client";
import Image from "next/image";
import React, { useState } from "react";

import { type ProductType } from "~/types/types";

import { Button, buttonVariants } from "../_components/ui/button";
import { Switch } from "../_components/ui/switch";

interface ProductProps {
  product: ProductType;
  variant?: "default" | "mobile";
}

const Product = ({ product }: ProductProps) => {
  const { name, description, calification, personalize, price, restaurant } =
    product;

  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const descriptionItems =
    description?.split("\n").filter((item) => item.trim() !== "") ?? [];

  const [firstItem, ...restItems] = descriptionItems;

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-col gap-8 overflow-hidden rounded-lg md:flex-row md:items-start ">
          <div className="md:w-3/5">
            <Image
              src="/img/flipa-box.svg"
              alt=""
              height={223}
              width={176}
              className="w-full rounded-b-lg rounded-t-lg bg-cover"
            />
            <div className="w-full space-y-4 p-6">
              <h2 className="text-2xl">Descripción</h2>
              <div className="text-lg text-gray-700">
                {firstItem}
                <ul className="list-inside list-disc">
                  {restItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl text-customGray">{restaurant}</h2>
                  <h1 className="bg-custom-gradient bg-clip-text text-3xl text-transparent">
                    {name}
                  </h1>
                </div>
                <Image
                  src="/card/favorite-product.svg"
                  width={24}
                  height={27.2}
                  alt=""
                />
              </div>
              <div className="flex items-center gap-7">
                <div className="flex gap-1">
                  <Image
                    src="/card/star-product.svg"
                    priority
                    width={16}
                    height={16}
                    alt=""
                    className="-mt-[0.2rem]"
                  />
                  <p className="cursor-pointer bg-custom-gradient bg-clip-text text-sm">
                    {calification}
                  </p>
                </div>
                <p className="bg-clip-text text-sm text-blue-700">
                  Ver calificaciones
                </p>
              </div>

              <div className="mb-8 flex gap-0">
                <button
                  onClick={decreaseQuantity}
                  className="rounded-l-md bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  -
                </button>
                <div className="flex w-12 items-center justify-center border-y border-gray-200 text-center">
                  {quantity}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="rounded-r-md bg-gray-200 p-2 text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mb-6 space-y-2">
              <h2 className="g-clip-text text-xl ">Personaliza tu box</h2>
              {personalize?.map((option) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 text-gray-800"
                >
                  <Switch />
                  <label>{option}</label>
                </div>
              ))}
              <div className="flex h-10 w-56 flex-col items-start text-sm font-light tracking-tighter">
                <p className="text-gray-400">¿Necesita más personalización?</p>
                <p className="cursor-pointer bg-custom-gradient bg-clip-text text-transparent">
                  Hablar con un ejecutivo
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-10 mt-10 flex flex-row justify-between text-2xl font-medium text-customGray">
                TOTAL
                <div>
                  ${price}
                  <span className="text-text">+ IVA</span>
                </div>
              </div>
              <Button className={buttonVariants({ variant: "primary" })}>
                Comprar
              </Button>
              <p className="cursor-pointer bg-custom-gradient bg-clip-text text-center text-sm font-light leading-6 tracking-tighter text-transparent">
                Imprimir presupuesto
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div>
          <Image
            src="/img/flipa-box.svg"
            priority
            alt=""
            height={400}
            width={400}
            objectFit="cover"
            className="w-full"
          />
          <div className="flex flex-col gap-4 p-4">
            <div className="mt-4 flex justify-between">
              <div>
                <h2 className="text-2xl text-customGray">{restaurant}</h2>
                <h1 className="bg-custom-gradient bg-clip-text text-3xl text-transparent">
                  {name}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-7">
              <div className="flex items-center gap-1">
                <div className="-mt-[0.15rem] h-4 w-4 bg-[url('/card/star-product.svg')]"></div>
                <p className="cursor-pointer bg-custom-gradient bg-clip-text text-sm">
                  {calification}
                </p>
              </div>
              <p className="bg-clip-text text-sm text-blue-700">
                Ver calificaciones
              </p>
            </div>

            <div className=" text-gray-700">
              <h1 className="text-xl">Descripción</h1>
              <div className="text-base text-gray-700">
                {firstItem}
                <ul className="list-inside list-disc">
                  {restItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-10 mt-10 flex flex-row bg-custom-gradient bg-clip-text text-2xl font-medium text-transparent">
              <div>
                ${price}
                <span className="text-text">/ unidad</span>
              </div>
            </div>

            <div className="flex flex-row gap-8">
              <div className="mb-8 flex gap-0">
                <button
                  onClick={decreaseQuantity}
                  className="rounded-l-md bg-gray-200 p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  -
                </button>
                <div className="flex w-12 items-center justify-center border-y border-gray-200 text-center">
                  {quantity}
                </div>
                <button
                  onClick={increaseQuantity}
                  className="rounded-r-md bg-gray-200 p-2 text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  +
                </button>
              </div>
              <Button className={buttonVariants({ variant: "primary" })}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
