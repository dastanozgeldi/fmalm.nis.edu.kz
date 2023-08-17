import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

import { getStrapiURL } from "@/lib/api";

import { Mobile } from "./mobile";
import { Desktop } from "./desktop";

export const Nav = () => {
  const t = useTranslations("Menu");
  const [categories, setCategories] = useState<any[]>([]);
  const { locale } = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch(
        getStrapiURL(`/api/categories?locale=${locale}&populate=*`)
      );
      const { data } = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, [locale]);

  return (
    <nav className="space-y-3">
      <div className="container md:max-w-7xl lg:pb-6">
        <Mobile t={t} categories={categories} />
        <Desktop t={t} categories={categories} />
      </div>
    </nav>
  );
};

Nav.messages = ["Menu"];
