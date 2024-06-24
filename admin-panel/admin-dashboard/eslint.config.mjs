module.exports = {
  env: {
    browser: true, // Defines global variables available in browsers
    es2021: true, // Sets the version of ECMAScript syntax
    node: true, // Defines globals available in Node.js
  },
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
  ],
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows using import/export statements
  },
  rules: {
    // Enable additional rules, customize from here:
    indent: ["error", 2], // Enforces a 4-space indent
    "linebreak-style": ["error", "unix"], // Enforces Unix linebreaks
    quotes: ["error", "single"], // Enforce the use of single quotes
    semi: ["error", "always"], // Require semicolon at the end of statements
    "no-unused-vars": ["warn"], // Warns about variables that are declared but not used
    "no-console": ["warn"], // Warns about console statements, which you might want to turn off in production
    eqeqeq: ["error", "always"], // Require the use of === and !==
    curly: ["error", "all"], // Require curly braces for all control statements
    "no-trailing-spaces": ["error"], // Disallow trailing whitespace at the end of lines
  },
};
