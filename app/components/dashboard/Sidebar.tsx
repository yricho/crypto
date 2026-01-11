import { SIDEBAR_ITEMS } from "@/app/constants";
import { SidebarProps } from "@/app/types";
import Image from "next/image";
import { useState } from "react";

const Sidebar = ({ onSelected }: SidebarProps) => {
  const [selected, setSelected] = useState("Dashboard");
  const handleSelected = (item: string) => {
    setSelected(item);
    onSelected?.(item);
  };
  return SIDEBAR_ITEMS.map((item) => (
    <div
      key={item.name}
      className="flex gap-2 px-[32px] py-[16px] items-center cursor-pointer"
      onClick={() => handleSelected(item.name)}
    >
      <Image
        src={`/assets/icons/${item.icon}.svg`}
        alt={item.name}
        width={16}
        height={16}
      />
      <span
        className={`font-bold text-base ${
          selected === item.name ? "text-[#E5933A]" : "text-white/40"
        }`}
      >
        {item.name}
      </span>
    </div>
  ));
};

export default Sidebar;
