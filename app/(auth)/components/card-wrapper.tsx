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

interface CardProps {
  children: React.ReactNode;
  title: string;
  description: string;
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
      <CardFooter className="mt-2 text-sm flex justify-center text-blue-500 mb-2 pb-2">
        <Link href={`/${url}`}>{footerContent}</Link>
      </CardFooter>
    </Card>
  );
};
