import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

export const MenuIcons = ({ address }: { address: string }) => (
  <div className="flex items-center gap-3 lg:gap-10">
    <a
      className="flex items-center gap-2 text-gray-500 text-lg"
      href="tel:87273310104"
    >
      <IoCall className="h-5 w-5" />
      <span className="hidden lg:block">+7 727 331 0104</span>
    </a>
    <a
      className="flex items-center gap-2 text-gray-500 text-lg"
      href="mailto:info@fmalm.nis.edu.kz"
    >
      <IoMail className="h-5 w-5" />
      <span className="hidden lg:block">info@fmalm.nis.edu.kz</span>
    </a>
    <a
      className="flex items-center gap-2 text-gray-500 text-lg"
      href="https://go.2gis.com/dvoxj"
    >
      <IoLocationSharp className="h-5 w-5" />
      <span className="hidden lg:block">{address}</span>
    </a>
  </div>
);
