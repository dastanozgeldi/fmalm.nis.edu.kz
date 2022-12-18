import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex items-center">
      <p className="font-semibold text-white bg-primary py-2 px-4">Новости</p>
      <div className="bg-secondary flex items-center justify-between w-full py-2 px-4">
        <p className="font-semibold text-white">Lorem ipsum dolor sit amet</p>
        <div className="hidden lg:flex items-center text-white">
          <a className="nav-item" href="">
            Мероприятия
          </a>
          <a className="nav-item" href="">
            СМИ о нас
          </a>
          <a className="nav-item" href="">
            🇷🇺 Русский
          </a>
          <a className="nav-item" href="">
            На карте
          </a>
          <a className="nav-item" href="">
            <FaFacebook />
          </a>
          <a className="nav-item" href="">
            <FaInstagram />
          </a>
          <a className="nav-item" href="">
            <FaYoutube />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
