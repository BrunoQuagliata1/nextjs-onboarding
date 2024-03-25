import { Suspense } from "react";

import { api } from "~/trpc/server";
import { NavigationMenuDemo } from "../_components/filter";
import Card from "../_components/gift-card";
import { Skeleton } from "../_components/ui/skeleton";

const ProductsList = async () => {
  const products = await api.product.getAll.query();
  return products.map((product) => (
    // eslint-disable-next-line react/jsx-key
    <div className="flex justify-center">
      <Card
        key={product.id}
        name={product.name}
        description={product.description ?? ""}
        calification={product.calification ?? ""}
        personalize={product.personalize.join(", ")}
        price={product.price}
        restaurant={product.restaurant ?? ""}
      />
    </div>
  ));
};

export default async function Search() {
  return (
    <main className="w-[calc(100vw - 10rem)] m-10 flex flex-col max-sm:m-10">
      <div className="flex w-60 flex-col gap-3.5 leading-[108%] max-sm:hidden">
        <h6 className="text-[20px] tracking-tight text-gray-900">Regalos</h6>
        <h4 className="text-[35px] font-medium text-gray-900">Food Box</h4>
        <p className="tracking-tight text-gray-400">Más de 30 opciones</p>
      </div>
      <div className="max-sm:hidden">
        <NavigationMenuDemo />
      </div>
      <Suspense fallback={<Skeleton />}>
        <div className="grid w-full grid-cols-2 flex-row gap-8 py-4 sm:grid-cols-2 md2:grid-cols-3 lg2:grid-cols-4 xl2:grid-cols-5 2xl2:grid-cols-6">
          <ProductsList />
        </div>
      </Suspense>
    </main>
  );
}
