import { NavBar } from "../_components/navbar";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-0 box-border w-full p-0">
      <div className=" max-sm:hidden">
        <NavBar />
      </div>
      {children}
    </section>
  );
}
