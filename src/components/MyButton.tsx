import { Button, ButtonProps } from "primereact/button";

export const MyButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      pt={{
        root: {
          className:
            "bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded",
        },
        label: { className: "text-sm font-medium" },
        icon: { className: "mr-2 text-base" },
      }}
    />
  );
};
