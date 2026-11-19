import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { ignores: ["node_modules/", "dist/", "build/", "coverage/"] },
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "no-console": 0,       // вимкнено
      "no-unused-vars": 1,   // попередження
      eqeqeq: 2,             // помилка
      "prefer-const": 2,     // помилка
      "no-var": 2,           // помилка
    },
  },
  eslintConfigPrettier,
];