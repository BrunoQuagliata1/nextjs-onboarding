"use server";
import Product from "~/app/_components/product";
import { api } from "~/trpc/server";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const id = searchParams.id;
  const product = await api.product.getOne.query({ id: Number(id) });

  return (
    <main className="w-[calc(100vw - 10rem)] m-20 flex flex-col max-sm:m-10">
      <Product product={product} />
    </main>
  );
}
