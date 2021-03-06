const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: {
            "@border-radius-base": "4px",
            // "@font-size-base": "15px",
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
