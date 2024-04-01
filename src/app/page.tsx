import Banner from "./_components/banner";
import SignIn from "./_components/signin";

export default async function Home() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="hidden bg-custom-gradient sm:flex sm:w-1/2">
        <Banner />
      </div>
      <div className="flex items-center justify-center sm:w-1/2">
        <SignIn />
      </div>
    </main>
  );
}
