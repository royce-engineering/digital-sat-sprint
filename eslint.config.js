const nextConfig = require("eslint-config-next");

module.exports = [
  ...nextConfig,
  {
    ignores: [".next/**", "node_modules/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/preserve-manual-memoization": "off",
    },
  },
];
