"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import SocialButtons from "./social-buttons";

interface CardProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  footerContent: string;
  url: string;
}

export const CardWrapper: React.FC<CardProps> = ({
  children,
  title,
  description,
  footerContent,
  url,
}) => {
  return (
    <Card className="xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2 w-4/6">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="my-2 flex justify-center flex-col pb-2">
        <SocialButtons />
        <Link className="text-sm text-blue-500 mt-2" href={`/${url}`}>
          {footerContent}
        </Link>
      </CardFooter>
    </Card>
  );
};
