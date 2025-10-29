import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    // Override default ignores of eslint-config-next.
    globalIgnores([
    // Default ignores of eslint-config-next:
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
    ]),
    {
        rules: {
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
            "camelcase": "error",
            "indent": ["error", 4],
            "no-duplicate-imports": "error",
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/no-unused-vars": ["warn"],
            "no-console": ["warn", { "allow": ["warn", "error"] }],
            "react/jsx-no-target-blank": "error",
            "import/order": ["warn", { "alphabetize": { "order": "asc" } }]
        }
    },
]);

export default eslintConfig;
