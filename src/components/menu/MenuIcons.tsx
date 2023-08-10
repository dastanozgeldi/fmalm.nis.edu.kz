import { Icons } from "../icons";

export const MenuIcons = ({ address }: { address: string }) => (
  <div className="flex items-center justify-end gap-3 lg:gap-6">
    <a
      aria-label="Contact Phone"
      className="flex items-center gap-2 text-dark text-lg"
      href="tel:87273310104"
    >
      <Icons.phone className="h-5 w-5" />
      <span className="hidden lg:block">+7 727 331 0104</span>
    </a>
    <a
      aria-label="Contact Mail"
      className="flex items-center gap-2 text-dark text-lg"
      href="mailto:info@fmalm.nis.edu.kz"
    >
      <Icons.mail className="h-5 w-5" />
      <span className="hidden lg:block">info@fmalm.nis.edu.kz</span>
    </a>
    <a
      aria-label="Address"
      className="flex items-center gap-2 text-dark text-lg"
      href="https://go.2gis.com/dvoxj"
    >
      <Icons.location className="h-5 w-5" />
      <span className="hidden lg:block">{address}</span>
    </a>
  </div>
);
