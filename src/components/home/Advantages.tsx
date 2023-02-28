import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("Advantages");
  return (
    <section className="bg-[#111] min-h-screen flex items-center justify-center">
      <div className="space-y-16">
        <h1 className="leading-10 text-white text-center text-3xl font-extrabold underline decoration-primary decoration-[2px] underline-offset-[10px]">
          {t("our_advantages")}
        </h1>
        <div className="flex gap-6 overflow-x-auto lg:container max-w-sm">
          <div className="relative">
            <img
              alt="Random Image for Illustration"
              src="https://resources.finalsite.net/images/v1636512047/isbeijing/vhsq5cxdn1ul2mwuompd/20211111Reaccreditationkick-off-CISlogothumb.jpg"
              className="object-cover object-center h-[400px] min-w-[300px] rounded-lg brightness-75 hover:brightness-[65%] hover:duration-300"
            />
            <h3 className="text-gray-100 absolute max-w-[200px] text-xl font-bold bottom-4 left-0 mx-4">
              {t("cis_accreditation")}
            </h3>
          </div>
          <div className="relative">
            <img
              alt="Random Image for Illustration"
              src="https://isoglobal.com.au/wp-content/uploads/2022/03/ISO-image-300x176-1200x675.png"
              className="object-cover object-center h-[400px] min-w-[300px] rounded-lg brightness-75 hover:brightness-[65%] hover:duration-300"
            />
            <h3 className="text-gray-100 absolute max-w-[200px] text-xl font-bold bottom-4 left-0 mx-4">
              {t("compliance")}
            </h3>
          </div>
          <div className="relative">
            <img
              alt="Random Image for Illustration"
              src="https://static.wixstatic.com/media/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg/v1/fill/w_596,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg"
              className="object-cover object-center h-[400px] min-w-[300px] rounded-lg brightness-75 hover:brightness-[65%] hover:duration-300"
            />
            <h3 className="text-gray-100 absolute max-w-[200px] text-xl font-bold bottom-4 left-0 mx-4">
              {t("multilingualism")}
            </h3>
          </div>
          <div className="relative">
            <img
              alt="Random Image for Illustration"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFD2qOqCkDuEV-2YyoIW7BNge2roXeCtW1zUA0Yuq466pTrezPvAcL5oywj3s0eS5cnQ&usqp=CAU"
              className="object-cover object-center h-[400px] min-w-[300px] rounded-lg brightness-75 hover:brightness-[65%] hover:duration-300"
            />
            <h3 className="text-gray-100 absolute max-w-[200px] text-xl font-bold bottom-4 left-0 mx-4">
              {t("additional_education")}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

Advantages.messages = ["Advantages"];
