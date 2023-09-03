/** @type {import("eslint").Linter.Config} */
module.exports = {
  env: {
    browser: false,
    commonjs: false,
    es6: true,
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:css/recommended",
    "plugin:github/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  ignorePatterns: ["/node_modules/**/*", "/dist/**/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "2020"
  },
  overrides: [
    {
      files: ["*.cjs"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      env: {
        commonjs: true
      },
      rules: {
        "import/no-commonjs": "off"
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      env: {
        browser: true
      },
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier"
      ],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          pragma: "h",
          version: "18.0"
        }
      }
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"]
      },
      extends: [
        "plugin:astro/recommended",
        "plugin:@typescript-eslint/strict",
        "plugin:@typescript-eslint/stylistic",
        "prettier"
      ]
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true
      },
      parserOptions: {
        sourceType: "module"
      },
      rules: {
        "prettier/prettier": "off"
      }
    }
  ],
  rules: {
    "prettier/prettier": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "github/no-then": "off",
    "i18n-text/no-en": "off",
    "import/no-unresolved": "off",
    "filenames/match-regex": "off"
  }
};
