import Image from "next/image";
import Link from "next/link";
import { FaHome, FaPhone } from "react-icons/fa";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="bg-[#253b80] p-4">
      <div className="max-w-[108ch] mx-auto flex flex-col md:flex-row items-center justify-between space-y-8">
        <Link href="/">
          <Image className="w-48 md:w-72" src={logo} alt="" />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* contact */}
          <div className="text-white flex items-center gap-4">
            <FaPhone className="w-8 h-8" />
            <div className="flex flex-col">
              <a className="text-xl" href="tel:77132411737">
                +7 7132 41-17-37
              </a>
              <a className="text-gray-400" href="mailto:info@fmalm.nis.edu.kz">
                info@fmalm.nis.edu.kz
              </a>
            </div>
          </div>
          {/* address */}
          <div className="text-white flex items-center gap-4">
            <FaHome className="w-8 h-8" />
            <div className="flex flex-col">
              <a className="text-xl" href="https://go.2gis.com/dvoxj">
                ул. Жамакаева, 145
              </a>
              <span className="text-gray-400">
                г. Алматы, Медеуский район
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
