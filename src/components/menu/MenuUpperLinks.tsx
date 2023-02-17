import { MenuLocaleButton } from "./MenuLocaleButton";

export const MenuUpperLinks = () => {
  return (
    <div className="bg-gray-200 text-xs sm:text-sm w-full py-1 px-4 flex items-center justify-end gap-2 lg:gap-4">
      <a href="https://fmalmnis.edupage.org/timetable">Сабақ кестесі</a>
      <a href="https://sms.fmalm.nis.edu.kz/">МБЖ</a>
      <a href="https://app.online.nis.edu.kz:8800/">NIS Online</a>
      <a href="https://vs.nis.edu.kz/">Виртуалды мектеп</a>
      <MenuLocaleButton />
    </div>
  );
};
