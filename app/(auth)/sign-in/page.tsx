import { Metadata } from "next";
import { SignInForm } from "../components/sign-in-form";
import { Heading } from "@/components/ui/heading";
import { CardWrapper } from "../components/card-wrapper";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to AUTH",
};

export default function SignIn() {
  return (
    <div>
      <CardWrapper
        title="Login"
        description="Welcome Back"
        footerContent="Don't have an account?"
        url="sign-up"
      >
        <SignInForm />
      </CardWrapper>
    </div>
  );
}
