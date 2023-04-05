import { styles } from "@/styles";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const Advantages = () => {
  const t = useTranslations("Advantages");
  return (
    <section className="lg:flex lg:flex-col lg:items-center lg:justify-between bg-[#111] space-y-8 pt-8">
      <h1 className={clsx(styles.sectionHeadText, "text-white")}>
        {t("our_advantages")}
      </h1>
      <div className="mx-4 flex hide-scrollbar overflow-auto lg:grid lg:grid-cols-4 gap-4 items-center justify-items-center">
        <div className="relative">
          <img
            alt="Random Image for Illustration"
            src="https://resources.finalsite.net/images/v1636512047/isbeijing/vhsq5cxdn1ul2mwuompd/20211111Reaccreditationkick-off-CISlogothumb.jpg"
            className={styles.advantageBanner}
          />
          <h3 className={styles.advantageBannerText}>
            {t("cis_accreditation")}
          </h3>
        </div>
        <div className="relative">
          <img
            alt="Random Image for Illustration"
            src="https://isoglobal.com.au/wp-content/uploads/2022/03/ISO-image-300x176-1200x675.png"
            className={styles.advantageBanner}
          />
          <h3 className={styles.advantageBannerText}>{t("compliance")}</h3>
        </div>
        <div className="relative">
          <img
            alt="Random Image for Illustration"
            src="https://static.wixstatic.com/media/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg/v1/fill/w_596,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/42fb34_e3bf748312e3480bb1e8a8d12fa7161d~mv2.jpeg"
            className={styles.advantageBanner}
          />
          <h3 className={styles.advantageBannerText}>{t("multilingualism")}</h3>
        </div>
        <div className="relative">
          <img
            alt="Random Image for Illustration"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFD2qOqCkDuEV-2YyoIW7BNge2roXeCtW1zUA0Yuq466pTrezPvAcL5oywj3s0eS5cnQ&usqp=CAU"
            className={styles.advantageBanner}
          />
          <h3 className={styles.advantageBannerText}>
            {t("additional_education")}
          </h3>
        </div>
      </div>
    </section>
  );
};

Advantages.messages = ["Advantages"];
