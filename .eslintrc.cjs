module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:promise/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
    ],
    settings: {
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
            node: {
                moduleDirectory: ["node_modules", "src/"],
            },
        },
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-restricted-imports": [
            "error",
            {
                patterns: [
                    {
                        group: [".*"],
                        message: "Relative imports are not allowed, use absolute import instead.",
                    },
                ],
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_",
            },
        ],
        "react/no-unknown-property": "warn",
        "react/prop-types": "off",
        "import/no-absolute-path": "off",
        "import/no-named-as-default": "off",
        "import/order": [
            "warn",
            {
                alphabetize: {
                    order: "asc",
                },
                "newlines-between": "always",
            },
        ],
        "promise/always-return": "warn",
        "promise/catch-or-return": "warn",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
};
