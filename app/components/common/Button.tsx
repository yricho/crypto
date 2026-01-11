import { ButtonProps } from "@/app/types";

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-sm border border-[#D57C17] border-2 rounded-[100px] font-medium bg-black cursor-pointer ${style}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
