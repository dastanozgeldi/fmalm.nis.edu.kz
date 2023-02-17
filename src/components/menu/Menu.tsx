import { getStrapiURL } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { clsx } from "clsx";

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
    // <div className="z-50 hidden text-dark lg:flex lg:overflow-auto items-center justify-end space-x-2">
    <div
      className={clsx(
        "w-full absolute right-0 top-12",
        "z-40 flex flex-col gap-4 rounded bg-white",
        "lg:static lg:flex-row lg:items-center lg:justify-end"
      )}
    >
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
