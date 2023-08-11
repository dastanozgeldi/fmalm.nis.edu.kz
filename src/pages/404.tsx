import { Button } from "@/components/ui/button";
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
      <div className="flex items-center gap-3">
        <a
          className="text-white rounded cursor-pointer"
          onClick={() => router.back()}
        >
          <Button size="lg">🤚 {t("go_back")}</Button>
        </a>
        <a className="text-white rounded" href="tel:87273310104">
          <Button size="lg">⛪️ {t("contact_school")}</Button>
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
