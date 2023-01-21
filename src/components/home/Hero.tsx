import Image from "next/image";
import { FaCalendar, FaUser } from "react-icons/fa";
import chuvak from "./chuvak.png";

export const Hero = () => {
  return (
    <section className="mx-auto gap-8 flex flex-col lg:flex-row items-center container">
      {/* Important Information */}
      <div className="space-y-2">
        <h1 className="my-4 uppercase text-4xl font-bold underline underline-offset-8 decoration-primary decoration-[4px]">
          Байқау тестілеуі
        </h1>
        <p className="text-[20px]">
          2022-2023 ОҚУ ЖЫЛЫНДА НАЗАРБАЕВ ЗИЯТКЕРЛІК МЕКТЕПТЕРІНІҢ 7-СЫНЫПТАРЫНА
          ОҚУШЫЛАРДЫ КОНКУРСТЫҚ ІРІКТЕУДІҢ БАЙҚАУ ТЕСТІЛЕУІ
        </p>
        <p className="text-[20px]">
          «Назарбаев Зияткерлік мектептері» дербес білім беру ұйымы Назарбаев
          Зияткерлік мектептерінің 7-сыныптарына оқушыларды конкурстық
          іріктеудің байқау тестілеуін (бұдан әрі – байқау тестілеуі)
          өткізетінін хабарлайды.
        </p>
        <p className="text-[20px]">
          Бір байқау тестілеуіне қатысу бағасы 12 000 теңгені құрайды.
        </p>
        <button className="text-[20px] text-primary p-2 border-2 border-primary rounded-lg">
          Толығырақ
        </button>
      </div>
      {/* Pinned Post */}
      <div className="relative max-w-[400px] border border-gray-500 rounded-lg">
        <span className="absolute right-0 p-2 m-2 text-white bg-secondary rounded-lg">
          Мектеп жаңалықтары
        </span>
        <Image alt="Pinned Post" src={chuvak} className="rounded-t-lg" />
        <div className="p-2 space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-gray-500 flex items-center gap-2">
              <FaCalendar /> 29.12.2022
            </div>
            <div className="text-gray-500 flex items-center gap-2">
              <FaUser /> Аружан Толебай
            </div>
          </div>
          <h2 className="text-lg font-bold">NIS-ке құжат қабылдау жалғасуда</h2>
          <p>
            Құжат қабылдау 2022 жылғы 1 желтоқсаннан 2023 жылғы 10 қаңтарға
            дейін. Кешенді тестілеу 2023 жылғы...
          </p>
        </div>
      </div>
    </section>
  );
};
