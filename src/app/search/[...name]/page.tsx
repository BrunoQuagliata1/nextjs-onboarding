"use server";
import Product from "~/app/_components/product";
import { api } from "~/trpc/server";

interface ProductType {
  id: number;
  name: string;
  description: string | null;
  calification: string | null;
  personalize: string[];
  price: number;
  restaurant: string | null;
  imageUrl?: string | null;
}

type GetOneType = {
  query: (args: { id: number }) => Promise<ProductType>;
};

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const id = searchParams.id;
  const getOne = api.product.getOne as GetOneType;
  const product: ProductType = await getOne.query({ id: Number(id) });

  return (
    <main className="w-[calc(100vw - 10rem)] m-20 flex flex-col max-sm:m-0">
      <div className="hidden sm:block">
        <Product product={product} />
      </div>
      <div className="sm:hidden">
        <Product product={product} variant="mobile" />
      </div>
    </main>
  );
}
