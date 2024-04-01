import { FooterSearchProduct } from "../../_components/footer";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-0 box-border w-full p-0">
      {children}
      <FooterSearchProduct />
    </section>
  );
}
