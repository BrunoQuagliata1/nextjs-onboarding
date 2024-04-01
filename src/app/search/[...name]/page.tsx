"use server";
import Product from "~/app/_components/product";
import { api } from "~/trpc/server";
import { type ProductType } from "~/types/types";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const id = searchParams.id;
  const getOne = api.product.getOne;
  const product = (await getOne.query({ id: Number(id) })) as ProductType;

  return (
    <main className="m-20 flex flex-col max-md:m-0">
      <Product product={product} />
    </main>
  );
}
