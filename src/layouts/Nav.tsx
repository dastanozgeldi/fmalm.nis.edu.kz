import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Nav = () => (
  <nav className="flex items-center">
    <p className="font-semibold text-white bg-primary py-2 px-4">Новости</p>
    <div className="bg-secondary flex items-center justify-between w-full py-2 px-4">
      <p className="font-semibold text-white">Разрабатывается жаңа сайт</p>
      <div className="hidden lg:flex items-center text-white">
        <a className="nav-item" href="">
          Мероприятия
        </a>
        <a
          className="nav-item"
          href="https://www.facebook.com/fmalm.nis.edu.kz"
        >
          <FaFacebook className="w-6 h-6" />
        </a>
        <a className="nav-item" href="https://www.instagram.com/nis_pm_almaty/">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a
          className="nav-item"
          href="https://www.youtube.com/channel/UC0FhZfxcAlsWdvU-Bgzgi8A?app=desktop"
        >
          <FaYoutube className="w-6 h-6" />
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
