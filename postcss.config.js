module.exports = {
  plugings: [
    // a modern CSS linter. It supports the latest
    // CSS syntax, as well as CSS-like syntaxes,
    // such as SCSS.
    require("stylelint")({
      configFile: "stylelint.config.js",
    }),

    //reduce the amount of CSS code
    require("postcss-extend"),

    // PreCSS lets you use Sass-like markup and staged CSS
    // features in CSS.
    require("precss"),

    //PostCSS Preset Env lets you convert modern CSS into something most
    //browsers can understand, determining the polyfills
    //you need based on your targeted browsers or runtime environments.
    require("postcss-preset-env"),

    require("tailwindcss")("tailwind.config.js"),

    // plugin to unwrap nested rules like how Sass does it.
    require("postcss-nested"),

    // Add vendor prefixes to CSS rules using values from Can I Use
    require("autoprefixer"),

    // A PostCSS plugin to console.log() the messages (warnings, etc.) registered by other PostCSS plugins.
    require("postcss-reporter"),
  ],
};
