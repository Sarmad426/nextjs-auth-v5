import { Metadata } from "next";
import { SignInForm } from "../components/sign-in-form";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to AUTH",
};

export default function SignIn() {
  return (
    <div>
      <SignInForm />
    </div>
  );
}
