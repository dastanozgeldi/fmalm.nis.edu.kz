import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <Image
      alt="NIS PM Almaty Logo"
      src="/logo.png"
      width={98}
      height={36}
      className="w-[98px] h-[36px] sm:w-[134px] sm:h-[48px] lg:w-[195px] lg:h-[72px] my-2"
    />
  </Link>
);
