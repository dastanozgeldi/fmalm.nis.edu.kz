import { FaAngleDown } from "react-icons/fa";

export const MenuItem = ({ title, pages }: any) => (
  <div>
    <button className="uppercase w-64 lg:w-max flex items-center justify-between gap-2 peer px-5 py-2">
      {title} <FaAngleDown />
    </button>
    <div className="w-64 lg:w-max absolute z-50 hidden peer-hover:flex hover:flex flex-col bg-white drop-shadow-lg">
      {pages.map((page: any) => (
        <a
          key={page.attributes.id}
          className="px-5 py-3 hover:bg-gray-200"
          href={page.attributes.slug}
        >
          {page.attributes.title}
        </a>
      ))}
    </div>
  </div>
);
