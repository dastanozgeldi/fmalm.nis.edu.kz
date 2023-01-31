import Link from "next/link";

export const Logo = () => (
  <Link href="/">
    <img
      alt="NIS PM Almaty Logo"
      className="h-[36px] sm:h-[56px] my-2"
      src="/logo.png"
    />
  </Link>
);
