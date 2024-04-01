import { getServerAuthSession } from "~/server/auth";

import Banner from "./_components/banner";
import SignIn from "./_components/signin";

export default async function Home() {
  const session = await getServerAuthSession();
  session
    ? console.log("Logged in!", session)
    : console.log("No session found");

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
