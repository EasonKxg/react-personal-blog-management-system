const path = require("path");
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  webpack: {
    alias: {
      "@": resolve("scr"),
      assets: resolve("src/assets"),
      components: resolve("src/components"),
      store: resolve("src/store"),
      services: resolve("src/services"),
      pages: resolve("src/pages"),
      layout: resolve("src/layout"),
      utils: resolve("src/utils"),
    },
  },
};
