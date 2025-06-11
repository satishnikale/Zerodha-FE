import { LucideArrowRight } from "lucide-react";

interface ButtonProps {
  varient: "primary" | "secondary";
  text: string;
  rightIcon?: boolean;
  onClick?: () => void;
}

const buttonVarientStyle = {
  primary:
    "text-sm rounded-sm font-inter font-semibold text-white bg-blue-800 hover:bg-black",
  secondary: "flex text-[12px] font-bold text-blue-500 hover:text-black",
};

export const Button = ({ text, varient, rightIcon }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-1 appearance-none${buttonVarientStyle[varient]} py-2 px-7   transition-all duration-200`}
    >
      {text} {rightIcon && <LucideArrowRight size={13} />}
    </button>
  );
};
