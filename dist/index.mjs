// src/components/Button.tsx
import { Button as PrimeButton } from "primereact/button";
import { jsx } from "react/jsx-runtime";
var Button = ({ label, onClick }) => {
  return /* @__PURE__ */ jsx(
    PrimeButton,
    {
      label,
      onClick,
      className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
    }
  );
};
export {
  Button
};
