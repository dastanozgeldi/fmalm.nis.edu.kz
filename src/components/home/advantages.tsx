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
    <section className="bg-[#111] py-24 px-6">
      <div className="mx-auto max-w-4xl lg:flex lg:flex-col lg:items-center lg:justify-between">
        <div className="text-center my-6 space-y-4">
          <h1 className="leading-10 text-center text-3xl xl:my-6 md:text-6xl font-bold text-white">
            {t("our_advantages")}
          </h1>
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-8">
          {advantages.map(({ title, image, text }) => (
            <div
              key={image}
              className="group relative space-y-4 bg-[#222] md:bg-transparent pb-4 md:pb-0 rounded-b-lg"
            >
              <img
                alt={title}
                src={`/advantages/${image}`}
                className="object-cover object-center h-[200px] md:h-[400px] w-full min-w-[300px] rounded-lg brightness-[70%] group-hover:brightness-[50%] group-hover:duration-200"
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
