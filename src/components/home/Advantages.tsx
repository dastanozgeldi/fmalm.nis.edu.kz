import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("Advantages");

  const advantages = [
    {
      image:
        "https://resources.finalsite.net/images/v1636512047/isbeijing/vhsq5cxdn1ul2mwuompd/20211111Reaccreditationkick-off-CISlogothumb.jpg",
      title: t("cis_accreditation"),
    },
    {
      image:
        "https://isoglobal.com.au/wp-content/uploads/2022/03/ISO-image-300x176-1200x675.png",
      title: t("compliance"),
    },
    {
      image:
        "https://static.wixstatic.com/media/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg/v1/fill/w_596,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg",
      title: t("multilingualism"),
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFD2qOqCkDuEV-2YyoIW7BNge2roXeCtW1zUA0Yuq466pTrezPvAcL5oywj3s0eS5cnQ&usqp=CAU",
      title: t("additional_education"),
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
            This project is an experiment to see how a modern app, with features
            like auth, subscriptions, API routes, and static pages would work in
            Next.js 13 app dir.
          </p>
        </div>
        <div className="flex hide-scrollbar overflow-auto lg:grid lg:grid-cols-2 items-center justify-items-center gap-8">
          {advantages.map(({ title, image }) => (
            <div className="relative">
              <img
                alt={title}
                src={image}
                className="object-cover object-center h-[400px] min-w-[300px] rounded-lg brightness-75 hover:brightness-[65%] hover:duration-300"
              />
              <h3 className="text-gray-100 absolute max-w-[200px] text-xl font-bold bottom-4 left-0 mx-4">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Advantages.messages = ["Advantages"];
