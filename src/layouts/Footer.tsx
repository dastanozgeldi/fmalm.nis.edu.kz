import {
  FaBook,
  FaCalendar,
  FaCircleNotch,
  FaFacebook,
  FaInstagram,
  FaLaptop,
  FaYoutube,
} from "react-icons/fa";
import { Logo } from "../components/common/Logo";

export const Footer = () => (
  <footer>
    {/* top */}
    <div className="p-4 text-gray-100 bg-[#111]">
      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
        {/* Миссия школы */}
        <div className="w-full space-y-2 text-center flex flex-col items-center">
          <Logo />
          <p>улица Жамакаева 145, Almaty, Kazakhstan</p>
          <p>8 (727) 331 0104</p>
          <p>info@fmalm.nis.edu.kz</p>
          {/* Social Media */}
          <div className="flex gap-2 py-4">
            <a href="https://www.facebook.com/fmalm.nis.edu.kz">
              <FaFacebook className="w-7 h-7" />
            </a>
            <a href="https://www.instagram.com/nis_pm_almaty/">
              <FaInstagram className="w-7 h-7" />
            </a>
            <a href="https://www.youtube.com/channel/UC0FhZfxcAlsWdvU-Bgzgi8A?app=desktop">
              <FaYoutube className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="items-center w-full space-y-4">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-primary">
            Полезные ссылки
          </h2>
          <div className="space-y-2">
            <a
              href="https://fmalmnis.edupage.org/timetable"
              className="flex items-center gap-2"
            >
              <FaCalendar /> Расписание школы
            </a>
            <a
              href="https://fmalmnis.edupage.org/timetable"
              className="flex items-center gap-2"
            >
              <FaBook /> СУШ
            </a>
            <a
              href="https://fmalmnis.edupage.org/timetable"
              className="flex items-center gap-2"
            >
              <FaCircleNotch /> NIS Online
            </a>
            <a
              href="https://fmalmnis.edupage.org/timetable"
              className="flex items-center gap-2"
            >
              <FaLaptop /> Виртуальная школа
            </a>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-primary">
            Категории
          </h2>
          <div className="space-y-2 flex flex-col">
            <a href="">СМИ о нас</a>
            <a href="">Новости школы</a>
            <a href="">Объявления</a>
          </div>
        </div>
      </div>
    </div>
    {/* bottom */}
    <div className="bg-[#111] p-4 text-sm text-gray-300 flex flex-col items-center justify-center space-y-2">
      <p className="text-gray-300">
        © НИШ ФМН г. Алматы. 2023. Все права защищены.
      </p>
    </div>
  </footer>
);
