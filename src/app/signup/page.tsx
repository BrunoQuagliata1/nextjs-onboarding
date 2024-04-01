import Banner from "../_components/banner";
import { SignUp as SignUpForm } from "./signup";

export default async function SignUp() {
  return (
    <main className="flex h-screen overflow-hidden">
      <div className="hidden bg-custom-gradient sm:flex sm:w-1/2">
        <Banner />
      </div>
      <div className="flex w-full items-center justify-center sm:w-1/2">
        <SignUpForm />
      </div>
    </main>
  );
}
