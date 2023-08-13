import { Icons } from "../icons";

export const MenuIcons = ({ address }: { address: string }) => {
  const links = [
    {
      aria: "Contact Phone",
      href: "tel:87273310104",
      icon: <Icons.phone className="h-5 w-5" />,
      label: "+7 727 331 0104",
    },
    {
      aria: "Contact Mail",
      href: "mailto:info@fmalm.nis.edu.kz",
      icon: <Icons.mail className="h-5 w-5" />,
      label: "info@fmalm.nis.edu.kz",
    },
    {
      aria: "Address",
      href: "https://go.2gis.com/dvoxj",
      icon: <Icons.location className="h-5 w-5" />,
      label: address,
    },
  ];

  return (
    <div className="flex items-center justify-end gap-3 lg:gap-6">
      {links.map(({ aria, href, icon, label }) => (
        <a
          aria-label={aria}
          className="flex items-center gap-2 text-dark text-lg"
          href={href}
        >
          {icon}
          <span className="hidden lg:block">{label}</span>
        </a>
      ))}
    </div>
  );
};
