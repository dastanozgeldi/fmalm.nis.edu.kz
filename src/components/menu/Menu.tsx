import { getStrapiURL } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";
import { cn } from "@/lib/utils";

export const Menu = () => {
  const [categories, setCategories] = useState<any>();
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
    <div
      className={cn(
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
