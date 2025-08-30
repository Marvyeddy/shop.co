import { Loader2Icon } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Typography from "./Typography";

const styles = {
  primary: "bg-black text-white",
  secondary: "bg-secondary text-['#00000099]",
  white: "bg-white text-black",
  transparent: "bg-transparent border border-border-gray text-black",
  discount: "bg-discount text-red",
};

export default function Button({
  variant,
  text,
  isRounded = true,
  className,
  children,
  isLoading,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: keyof typeof styles;
  text?: string;
  isRounded?: boolean;
  isLoading?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button
      className={`rounded-full px-4 py-2 hover:scale-105 duration-500 flex gap-3 items-center justify-center ${className} ${styles[variant]} cursor-pointer`}
      {...props}
    >
      {text ? (
        <>
          <Typography.P weight="medium">{text}</Typography.P>
          {isLoading ? (
            <Loader2Icon className="text-black w-5 h-5 animate-spin" />
          ) : null}
        </>
      ) : (
        children
      )}
    </button>
  );
}
