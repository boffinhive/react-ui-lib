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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(index_exports);

// src/components/Button.tsx
var import_button = require("primereact/button");
var import_theme = require("primereact/resources/themes/lara-light-blue/theme.css");
var import_primereact_min = require("primereact/resources/primereact.min.css");
var import_primeicons = require("primeicons/primeicons.css");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ label, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_button.Button,
    {
      label,
      onClick,
      className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
