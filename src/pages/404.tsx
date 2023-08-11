import { pick } from "lodash";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();
  const t = useTranslations("404");

  return (
    <div className="space-y-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl flex gap-2 items-center">
        <span className="text-3xl font-bold">404</span> - {t("not_found")}
      </h1>
      <h2 className="text-2xl"></h2>
      <div className="flex gap-3">
        <a
          className="text-white bg-secondary p-3 rounded text-lg cursor-pointer"
          onClick={() => router.back()}
        >
          🤚 {t("go_back")}
        </a>
        <a
          className="text-white bg-secondary p-3 rounded text-lg"
          href="tel:87273310104"
        >
          ⛪️ {t("contact_school")}
        </a>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: pick((await import(`@/messages/${locale}.json`)).default, [
        "404",
      ]),
    },
  };
}
