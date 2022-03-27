const { cdns, customScripts } = require("./script.config");

module.exports = {
    title: "Dimension",
    tagline: "The best search experience for docs, integrated in minutes, for free",
    url: "https://operators.dimension.labs/",
    baseUrl: "/docs/",
    trailingSlash: true,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",
    onDuplicateRoutes: "throw",
    favicon: "image/dscc-favicon.ico",
    organizationName: "DimensionLabs",
    projectName: "Dimension",
    /* Optional */
    // clientModules: customScripts,
    // scripts: cdns,
};
