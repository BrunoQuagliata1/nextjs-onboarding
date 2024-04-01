import { getServerAuthSession } from "~/server/auth";
import SignIn from "./_components/signin";
import Banner from "./_components/banner";

export default async function Home() {
  const session = await getServerAuthSession();
  session
    ? console.log("Logged in!", session)
    : console.log("No session found");

  return (
    <main className="flex h-screen overflow-hidden">
      <div className="hidden w-full items-center justify-center bg-gradient-to-br from-[#0F58B7] to-[#62D9FF] sm:flex sm:w-1/2">
        <Banner />
      </div>
      <div className="flex w-full items-center justify-center sm:w-1/2">
        <SignIn />
      </div>
    </main>
  );
}
