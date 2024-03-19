import { api } from "~/trpc/server";
import { NavigationMenuDemo } from "../_components/filter";
import Card from "../_components/gift-card";
import { Suspense } from "react";
import { Skeleton } from "../_components/ui/skeleton";

const ProductsList = async () => {
  const products = await api.product.getAll.query();
  return products.map((product) => (
    <Card
      key={product.id}
      name={product.name}
      description={product.description ?? ""}
      calification={product.calification ?? ""}
      personalize={product.personalize.join(", ")}
      price={product.price}
      restaurant={product.restaurant ?? ""}
      // imageUrl={product.imageUrl}
    />
  ));
};

export default async function Search() {
  const products = await api.product.getAll.query();
  //mutation para crear productos
  // const productCreationResponse = await api.product.create.mutate({
  //   name: "Sample Product Name",
  //   description: "This is a sample description of the product.",
  //   calification: "Excellent",
  //   personalize: ["Customization Option 1", "Customization Option 2"],
  //   price: 199,
  //   restaurant: "Sample Restaurant Name",
  // });

  return (
    <main className="m-20 flex h-screen flex-col">
      <div className=" flex  w-60 flex-col gap-3.5">
        <h6 className="text-[20px] font-normal leading-[108%] tracking-tight text-gray-900">
          Regalos
        </h6>
        <h4 className="text-[35px] font-medium leading-[108%] text-gray-900">
          Food Box
        </h4>
        <p className="text-[18px] font-normal leading-[108%] tracking-tight text-gray-400">
          Más de 30 opciones
        </p>
      </div>
      <NavigationMenuDemo />
      <Suspense fallback={<Skeleton />}>
        <div className="grid w-full grid-cols-5 flex-row py-4">
          <ProductsList />
        </div>
      </Suspense>
    </main>
  );
}
