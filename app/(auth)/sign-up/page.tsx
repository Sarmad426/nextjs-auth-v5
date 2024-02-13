import { Metadata } from "next";
import { SignUpForm } from "../components/sign-up-form";
import { Heading } from "@/components/ui/heading";
import { CardWrapper } from "../components/card-wrapper";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign up to AUTH",
};

export default function SignIn() {
  return (
    <div className="flex items-center justify-center mb-4 flex-col w-full space-y-6">
      <Heading title="🔐AUTH" />
      <CardWrapper
        title="Sign Up"
        footerContent="Already have an account?"
        url="sign-in"
      >
        <SignUpForm />
      </CardWrapper>
    </div>
  );
}
