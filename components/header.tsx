import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import HeaderLogo from "./header-logo";
import Navigation from "./navigation";
import { SymbolIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="h-16 lg:h-20 px-4 border-b flex items-center justify-between">
      <div className="flex items-center gap-3 lg:flex-row-reverse">
        <Navigation />
        <HeaderLogo />
      </div>
      <ClerkLoaded>
        <UserButton afterSignOutUrl="/" />
      </ClerkLoaded>
      <ClerkLoading>
        <SymbolIcon className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </header>
  );
};

export default Header;
