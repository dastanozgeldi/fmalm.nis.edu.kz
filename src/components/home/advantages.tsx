import Image from "next/image";
import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("Advantages");

  const advantages = [
    {
      image: "cis-accreditation.jpg",
      title: t("cis_accreditation.label"),
      text: t("cis_accreditation.text"),
    },
    {
      image: "international-standards.jpg",
      title: t("compliance.label"),
      text: t("compliance.text"),
    },
    {
      image: "multilingualism.jpg",
      title: t("multilingualism.label"),
      text: t("multilingualism.text"),
    },
    {
      image: "additional-education.jpg",
      title: t("additional_education.label"),
      text: t("additional_education.text"),
    },
  ];

  return (
    <section className="bg-[#111] py-24">
      <div className="mx-auto container max-w-7xl lg:flex lg:flex-col lg:justify-between">
        <div className="mb-6">
          <h1 className="text-white text-3xl my-2 md:text-4xl font-bold">
            {t("our_advantages")}
          </h1>
          <hr className="border-0 max-w-[36px] h-[6px] bg-green-500" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8">
          {advantages.map(({ title, image, text }) => (
            <div
              key={image}
              className="group relative space-y-4 bg-[#222] md:bg-transparent pb-4 md:pb-0 rounded-b-lg"
            >
              <Image
                width={300}
                height={200}
                alt={title}
                src={`/advantages/${image}`}
                className="object-cover object-center h-[200px] md:h-[400px] w-full min-w-[300px] rounded-lg brightness-[70%] md:group-hover:brightness-[50%] md:group-hover:duration-200"
              />
              <div className="md:absolute md:bottom-4 md:left-0 mx-4 text-gray-100 space-y-3">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="md:hidden md:group-hover:block">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Advantages.messages = ["Advantages"];
