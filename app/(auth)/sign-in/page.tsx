import { Metadata } from "next";
import { SignInForm } from "../components/sign-in-form";
import { Heading } from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to AUTH",
};

export default function SignIn() {
  return (
    <div>
      <Heading title="Login" description="Welcome Back" />
      <SignInForm />
    </div>
  );
}
