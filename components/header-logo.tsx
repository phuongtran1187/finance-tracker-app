import Link from "next/link";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <Image
          src="/logoipsum.svg"
          alt="Logo"
          width={28}
          height={28}
          className="text-white"
        />
        <p className="font-semibold text-black text-xl ml-2.5">ezMoney</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
