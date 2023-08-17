import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <Image
      alt="NIS PM Almaty Logo"
      src="/logo.svg"
      width={96}
      height={48}
      className="w-[128px] h-[64px] lg:w-[200px] lg:h-[100px] my-2"
    />
  </Link>
);
