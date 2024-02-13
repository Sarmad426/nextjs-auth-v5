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
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

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
        <div className="my-2 flex items-center justify-center w-full space-x-6">
          <Button variant="outline" className="w-2/5">
            <FcGoogle className="w-8 h-8" />
          </Button>
          <Button variant="outline" className="w-2/5">
            <FaGithub className="w-8 h-8" />
          </Button>
        </div>
        <Link className="text-sm text-blue-500 mt-2" href={`/${url}`}>
          {footerContent}
        </Link>
      </CardFooter>
    </Card>
  );
};
