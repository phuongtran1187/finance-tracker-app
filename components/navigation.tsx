"use client";

import { usePathname, useRouter } from "next/navigation";
import NavButton from "./nav-button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";
import { useMedia } from "react-use";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const routes = [
  {
    path: "/",
    label: "Dashboard",
  },
  {
    path: "/transactions",
    label: "Transactions",
  },
  {
    path: "/categories",
    label: "Categories",
  },
  {
    path: "/accounts",
    label: "Accounts",
  },
  {
    path: "/settings",
    label: "Settings",
  },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClickButton = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant={"outline"}
            size={"sm"}
            className="font-normal hover:bg-neutral-300 border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-black focus:bg-neutral-300 transition"
          >
            <HamburgerMenuIcon className="size-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.path}
                variant={route.path === pathname ? "secondary" : "ghost"}
                onClick={() => onClickButton(route.path)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.path}
          path={route.path}
          label={route.label}
          isActive={pathname === route.path}
        />
      ))}
    </nav>
  );
};

export default Navigation;
