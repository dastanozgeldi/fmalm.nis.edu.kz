import Image from "next/image";
import Link from "next/link";
import { FaHome, FaPhone } from "react-icons/fa";
import logo from "../../public/logo.png";

const Header = () => {
  return (
    <header className="bg-[#253b80] p-4">
      <div className="max-w-[108ch] mx-auto flex items-center justify-between">
        <Link href="/">
          <Image className="w-72" src={logo} alt="" />
        </Link>
        <div className="flex gap-8">
          {/* contact */}
          <div className="text-white flex items-center gap-4">
            <FaPhone className="w-10 h-10" />
            <div className="flex flex-col">
              <a className="text-xl" href="tel:77132411737">
                +7 7132 41-17-37
              </a>
              <a
                className="text-gray-400"
                href="mailto:akb_info@akb.nis.edu.kz"
              >
                akb_info@akb.nis.edu.kz
              </a>
            </div>
          </div>
          {/* address */}
          <div className="text-white flex items-center gap-4">
            <FaHome className="w-10 h-10" />
            <div className="flex flex-col">
              <a className="text-xl" href="tel:77132411737">
                +7 7132 41-17-37
              </a>
              <a
                className="text-gray-400"
                href="mailto:akb_info@akb.nis.edu.kz"
              >
                akb_info@akb.nis.edu.kz
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
