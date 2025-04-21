// src/components/StyledButton.tsx
import { Button } from "primereact/button";
import { jsx } from "react/jsx-runtime";
var StyledButton = (props) => {
  return /* @__PURE__ */ jsx(Button, { ...props, className: `p-button ${props.className || ""}` });
};

// src/components/StyledInputText.tsx
import { InputText } from "primereact/inputtext";
import { jsx as jsx2 } from "react/jsx-runtime";
var StyledInputText = (props) => {
  return /* @__PURE__ */ jsx2(InputText, { ...props, className: `p-inputtext ${props.className || ""}` });
};
export {
  StyledButton,
  StyledInputText
};
//# sourceMappingURL=index.mjs.map