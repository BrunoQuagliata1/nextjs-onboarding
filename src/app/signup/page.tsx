import Banner from "../_components/banner";
import { SignUp as SignUpForm } from "./signup";

export default async function SignUp() {
  return (
    <main className="flex h-screen max-sm:h-full">
      <div className="hidden bg-custom-gradient sm:flex sm:w-1/2">
        <Banner />
      </div>
      <div className="flex items-center justify-center sm:w-1/2">
        <SignUpForm />
      </div>
    </main>
  );
}
