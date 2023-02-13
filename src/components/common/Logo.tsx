import Image from "next/image";
import Link from "next/link";
import logo from "../../lib/images/logo.png";

export const Logo = () => (
  <Link href="/">
    <Image
      alt="NIS PM Almaty Logo"
      className="w-[98px] h-[36px] sm:w-[134px] sm:h-[48px] my-2"
      src={logo}
    />
  </Link>
);
