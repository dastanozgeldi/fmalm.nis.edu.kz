import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      {/* top */}
      <div className="p-4 text-gray-100 bg-[#253b80]">
        <div className="max-w-[108ch] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-8">
          {/* Миссия школы */}
          <div className="w-full">
            <h2>Миссия школы</h2>
            <p className="text-gray-300">
              Содействие раскрытию интеллектуального потенциала школьного
              сообщества через интеграцию национальных и международных
              достижений в образовании и науке.
            </p>
          </div>
          {/* Подпишитесь */}
          <div className="w-full space-y-4">
            <h2>Подпишитесь</h2>
            {/* social media */}
            <div className="flex gap-2">
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
            <p className="text-gray-300">
              Если вам нравятся наши статьи, подписывайтесь на социальные сети.
              Так что вы не пропустите ни одного материала.
            </p>
          </div>
          {/* Ценности */}
          <div className="w-full">
            <h2>Ценности</h2>
            <ul className="list-['>'] list-inside text-sm space-y-2 text-gray-300">
              <li> Честность</li>
              <li> Уважение</li>
              <li> Ответственность</li>
              <li> Патриотизм</li>
              <li> Глобальное гражданство</li>
              <li> Трудолюбие</li>
              <li> Креативность</li>
              <li> Адаптивность</li>
              <li> Здоровье</li>
              <li> Благополучие</li>
            </ul>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className="bg-[#031358] p-4 text-sm text-gray-300 flex flex-col items-center justify-center space-y-2">
        <p className="text-gray-300">
          © НИШ ФМН г. Алматы. 2023. Все права защищены.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="">О нас</a>
          <a href="">Школьная жизнь</a>
          <a href="">Претендентам</a>
          <a href="">Ученикам</a>
          <a href="">Учителям</a>
          <a href="">Родителям</a>
          <a href="">Выпускникам</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
