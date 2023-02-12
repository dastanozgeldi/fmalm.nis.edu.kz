import Image from "next/image";
import bestChoice from "@/lib/images/best-choice.png";
import { useTranslations } from "next-intl";

export const BestChoice = () => {
  const t = useTranslations("BestChoice");

  return (
    <section className="flex flex-col lg:flex-row lg:space-x-8 items-center">
      <div className="lg:w-1/3">
        <Image alt="Best Choice" className="rounded-lg" src={bestChoice} />
      </div>
      <div className="relative lg:w-2/3 space-y-6 py-4">
        <div className="space-y-2">
          <h1 className="text-2xl lg:text-5xl font-extrabold">{t("title")}</h1>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
            maiores fugiat molestias, aliquid, voluptatem placeat nesciunt
            perferendis aut sint consectetur laudantium amet rerum ea possimus
            eos tempore qui. Hic, temporibus?
          </p>
        </div>

        {/* Stats Cards */}
        <div className="overflow-x-auto">
          <div className="flex justify-center md:justify-start">
            <div className="w-28 h-28 bg-primary text-gray-100 text-center p-3">
              <h1 className="text-3xl font-extrabold">1023</h1>
              <p>students today</p>
            </div>
            <div className="w-28 h-28 bg-secondary text-gray-100 text-center p-3">
              <h1 className="text-3xl font-extrabold">1020</h1>
              <p>graduated 2015-2022</p>
            </div>
            <div className="w-28 h-28 bg-bg text-gray-100 text-center p-3">
              <h1 className="text-3xl font-extrabold">165</h1>
              <p>teachers currently</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BestChoice.messages = ["BestChoice"];
