import { getServerAuthSession } from "~/server/auth";
import SignIn from "./_components/signin";
import Banner from "./_components/banner";
import { unstable_noStore as noStore } from "next/cache";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerAuthSession();
  session ? console.log("loggeo!", session) : console.log("No anduvo mostro");

  return (
    <main className="flex h-screen ">
      <div className="flex w-1/2 items-center justify-center bg-gradient-to-br from-[#0F58B7] to-[#62D9FF]">
        <Banner />
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center">
        <SignIn />
      </div>
    </main>
  );
}
