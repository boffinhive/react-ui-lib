import { Button as PrimeButton } from "primereact/button";

type Props = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <PrimeButton
      label={label}
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
    />
  );
};
