import { cn } from "@/lib/utils";
import { useMedia } from "react-use";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";

type Props = {
  label: string;
  path: string;
  isActive?: boolean;
};

const NavButton = ({ label, path, isActive = false }: Props) => {
  return (
    <Button
      asChild
      size={"sm"}
      variant={"outline"}
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-neutral-200 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none focus:bg-white/30 transition text-black",
        isActive ? "bg-black text-white" : "bg-transparent"
      )}
    >
      <Link href={path}>{label}</Link>
    </Button>
  );
};

export default NavButton;
