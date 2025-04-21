"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  StyledButton: () => StyledButton,
  StyledInputText: () => StyledInputText
});
module.exports = __toCommonJS(index_exports);

// src/components/StyledButton.tsx
var import_button = require("primereact/button");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledButton = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_button.Button, { ...props, className: `p-button ${props.className || ""}` });
};

// src/components/StyledInputText.tsx
var import_inputtext = require("primereact/inputtext");
var import_jsx_runtime2 = require("react/jsx-runtime");
var StyledInputText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_inputtext.InputText, { ...props, className: `p-inputtext ${props.className || ""}` });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StyledButton,
  StyledInputText
});
//# sourceMappingURL=index.js.map