import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { SymbolIcon } from "@radix-ui/react-icons";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full hidden lg:flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center">
          <Image src={"/logoipsum.svg"} alt="Logo" width={200} height={200} />
          <p className="text-muted-foreground">
            Managing personal finances is easy
          </p>
        </div>
      </div>
      <div className="h-full lg:flex items-center justify-center px-4">
        <div className="flex items-center justify-center pt-16 lg:pt-0">
          <ClerkLoaded>
            <SignUp path="/register" />
          </ClerkLoaded>
          <ClerkLoading>
            <SymbolIcon className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
