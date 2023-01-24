import { getStrapiURL } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const [categories, setCategories] = useState<any>();
  const { locale } = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch(
        getStrapiURL(`/api/categories?locale=${locale}&populate=*`)
      );
      const categoriesRes = await res.json();
      setCategories(categoriesRes.data);
    }

    fetchCategories();
  }, [locale]);

  return (
    <div className="flex overflow-auto items-center justify-center">
      {categories &&
        categories.map((c: any) => (
          <MenuItem
            key={c.attributes.name}
            title={c.attributes.name}
            pages={c.attributes.pages?.data || []}
          />
        ))}
    </div>
  );
};
