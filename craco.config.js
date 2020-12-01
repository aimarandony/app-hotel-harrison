const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#0C2716",
              "@alert-info-bg-color": "#d8efde",
              "@border-radius-base": "4px",
              "@layout-header-background": "#000000",
              "@layout-trigger-background": "#080808",
              "@menu-dark-submenu-bg": "#080808",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
