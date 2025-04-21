// src/components/Button.tsx
import { Button as PrimeButton } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
