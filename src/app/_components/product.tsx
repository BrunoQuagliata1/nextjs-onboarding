"use client";
import { Switch } from "../_components/ui/switch";
import React, { useState } from "react";
import { Button, buttonVariants } from "../_components/ui/button";

interface Product {
  id: number;
  name: string;
  description: string | null;
  calification: string | null;
  personalize: string[];
  price: number;
  restaurant: string | null;
  imageUrl?: string | null;
}

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const {
    name,
    description,
    calification,
    personalize,
    price,
    restaurant,
    imageUrl,
  } = product || {};

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
    <div className="flex flex-col gap-8 overflow-hidden rounded-lg md:flex-row md:items-start">
      <div className="md:w-1/2">
        <div className="h-96 w-full rounded-b-lg rounded-t-lg bg-[url('/img/flipa-box.svg')] bg-cover"></div>
        <div className="w-full space-y-4 p-6">
          <h2 className="text-2xl">Descripción</h2>
          <div className="text-lg text-gray-700">
            <div>{firstItem}</div>
            <ul className="list-inside list-disc">
              {restItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div>
              <h2 className="text-customGray text-2xl">{restaurant}</h2>
              <h1 className="bg-custom-gradient bg-clip-text text-3xl text-transparent">
                {name}
              </h1>
            </div>
            <div className="h-6 w-[1.7rem] bg-[url('/card/favorite-product.svg')]"></div>
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
          <h2 className="g-clip-text font-poppins text-xl ">
            Personaliza tu box
          </h2>
          {personalize?.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Switch />
              <label htmlFor={`option-${index}`} className="text-gray-800">
                {option}
              </label>
            </div>
          ))}
          <div className="flex h-10 w-56 flex-col items-start">
            <p className="text-right text-sm font-light leading-6 tracking-tighter text-gray-400">
              ¿Necesita más personalización?
            </p>
            <p className="cursor-pointer bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-right text-sm font-light leading-6 tracking-tighter text-transparent">
              Hablar con un ejecutivo
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex flex-col">
          <div className="text-customGray mb-10 mt-10 flex flex-row justify-between font-medium">
            <div className="text-2xl">TOTAL</div>
            <div className="text-2xl">
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
  );
};

export default Product;
