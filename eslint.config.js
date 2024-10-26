import angular from "@angular-eslint/eslint-plugin";
import tseslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";

export default [
  {
    ignores: ["dist/", "node_modules/"]
  },
  {
    files: ["*.ts", "*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: {
      "@typescript-eslint": tseslint,  
      "@angular-eslint": angular, 
      "prettier": prettier
    },
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-empty-function": "warn",

      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase"
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case"
        }
      ],

      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          tabWidth: 2,
          printWidth: 100,
          trailingComma: "all",
          endOfLine: "lf"
        }
      ],

      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],
      "no-console": "warn",
      "no-debugger": "error",
      "arrow-parens": ["error", "always"],
      "no-duplicate-imports": "error"
    }
  },
  {
    files: ["*.html"],
    plugins: {
      "@angular-eslint/template": angular.template
    },
    rules: {
      "@angular-eslint/template/no-negated-async": "error", 
      "@angular-eslint/template/banana-in-box": "error",
      "@angular-eslint/template/no-inline-styles": "warn",
      "@angular-eslint/template/eqeqeq": ["error", "always"],
      "@angular-eslint/template/no-call-expression": "warn",

      "@angular-eslint/template/indent": ["error", 2],
      "@angular-eslint/template/attributes-order": "warn"
    }
  }
];
