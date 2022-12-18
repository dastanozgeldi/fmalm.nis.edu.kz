import Image from "next/image";
import Link from "next/link";
import { FaAngleDown, FaHome, FaPhone } from "react-icons/fa";
import logo from "../../public/logo.png";

type MenuItemProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

const MenuItem = ({ title, links }: MenuItemProps) => {
  return (
    <div>
      <button className="w-64 lg:w-max flex items-center justify-between gap-2 peer px-5 py-2 bg-primary hover:bg-[rgb(104,158,26)] text-white">
        {title} <FaAngleDown />
      </button>
      <div className="w-64 lg:w-max absolute z-50 hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
        {links.map(({ label, href }) => (
          <a key={label} className="px-5 py-3 hover:bg-gray-200" href={href}>
            {label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Menu = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center mt-4">
    {/* О нас */}
    <MenuItem
      title="О нас"
      links={[
        { label: "О школе", href: "/about/school" },
        { label: "Нормативные документы", href: "#" },
        { label: "Отчеты", href: "/about/review" },
        { label: "Попечительский совет", href: "#" },
        { label: "Наша команда", href: "#" },
        { label: "Педагогический состав", href: "#" },
        { label: "Вакансии", href: "/about/vacancies" },
      ]}
    />
    {/* Школьная Жизнь */}
    <MenuItem
      title="Школьная жизнь"
      links={[
        { label: "NIS Engineering", href: "/life/nis-engineering" },
        { label: "Кружковые занятия", href: "#" },
        { label: "Профориентационная работа", href: "#" },
        { label: "Библиотека", href: "/life/library" },
        { label: "Служба питания", href: "#" },
        { label: "Психологическая служба", href: "/life/psychologists" },
        { label: "Медицинская служба", href: "/life/medical-center" },
      ]}
    />
    {/* Претендентам */}
    <MenuItem
      title="Претендентам"
      links={[
        { label: "Конкурсный отбор", href: "#" },
        { label: "Виртуальная школа", href: "#" },
        { label: "Каникулярная школа", href: "#" },
      ]}
    />
    {/* Ученикам */}
    <MenuItem
      title="Ученикам"
      links={[
        { label: "Расписание уроков", href: "#" },
        { label: "Олимпийский центр", href: "#" },
        { label: "Руководство для учащихся и родителей", href: "#" },
        { label: "Объявления о конкурсах", href: "#" },
      ]}
    />
    {/* Учителям */}
    <MenuItem
      title="Учителям"
      links={[
        { label: "Трансляция опыта", href: "#" },
        { label: "Виртуальный методический кабинет", href: "#" },
        { label: "Профессиональное развитие", href: "#" },
      ]}
    />
    {/* Родителям */}
    <MenuItem
      title="Родителям"
      links={[
        { label: "Задать вопрос директору", href: "#" },
        { label: "Родительский комитет", href: "#" },
        {
          label: "Образовательная программа АОО «НИШ» — NIS-Program",
          href: "#",
        },
        {
          label: "График проведения суммативного оценивания за раздел",
          href: "#",
        },
        { label: "Оценивание достижений учащихся", href: "#" },
      ]}
    />
    {/* Выпускникам */}
    <MenuItem
      title="Выпускникам"
      links={[
        { label: "Наши выпускники", href: "#" },
        { label: "Ассоциация выпускников", href: "#" },
        { label: "Форум выпускников", href: "#" },
      ]}
    />
    {/* Новости */}
    <MenuItem
      title="Новости"
      links={[
        { label: "Объявление", href: "#" },
        { label: "Сми о нас", href: "#" },
      ]}
    />
  </div>
);

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
              <a className="text-xl" href="tel:87273310104">
                8 (727) 331-01-04
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
              <span className="text-gray-400">г. Алматы, Медеуский район</span>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
