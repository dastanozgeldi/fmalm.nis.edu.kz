import { fetchAPI } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  const [categories, setCategories] = useState<any>();
  const { locale } = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const [categoriesRes] = await Promise.all([
        fetchAPI("/categories", { populate: ["pages"] }),
      ]);
      setCategories(categoriesRes.data);
    }

    fetchCategories();
  }, [locale]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center mt-4">
      {categories &&
        categories.map((c: any) => (
          <MenuItem
            key={c.attributes.name}
            title={c.attributes.name}
            pages={c.attributes.pages.data}
          />
        ))}
    </div>
  );
};
