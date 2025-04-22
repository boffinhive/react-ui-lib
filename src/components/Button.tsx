import { Button as PrimeButton, ButtonProps } from "primereact/button";
import clsx from "clsx";

export interface CustomButtonProps extends ButtonProps {
  className?: string;
}

export const Button = ({ className, ...props }: CustomButtonProps) => {
  return (
    <PrimeButton
      {...props}
      className={clsx(
        "px-4 py-2 rounded !text-white !bg-blue-500 !hover:bg-blue-700 !font-medium",
        className
      )}
    />
  );
};
