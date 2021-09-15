"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_bootstrap_1 = require("react-bootstrap");
var react_scroll_1 = require("react-scroll");
function AboutUs() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_scroll_1.Element, { name: "AboutUsSc" },
            react_1["default"].createElement(core_1.Box, { className: "about_sc defpddng" },
                react_1["default"].createElement(react_bootstrap_1.Container, null,
                    react_1["default"].createElement(core_1.Grid, { container: true, spacing: 2, justifyContent: "center" },
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, className: "text-center" },
                            react_1["default"].createElement(core_1.Box, { className: 'def_h3', "data-aos": "fade-zoom-in", "data-aos-duration": "1400", "data-aos-delay": "200" },
                                react_1["default"].createElement(core_1.Typography, { component: "h3" }, "About Us"),
                                react_1["default"].createElement(core_1.Box, { className: "h3line" }))),
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, md: 5, "data-aos": "fade-right", "data-aos-duration": "1400", "data-aos-delay": "900" },
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt" }, "Coinxpad will empower crypto projects with the ability to distribute tokens and raise liquidity."),
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt frstlttr_bg" }, "We aim to create a safe destination for small/medium/big presale investors and early phase projects."),
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt" }, "Investors benefit from exclusive access to safe, innovative projects and rewarding investments on every blockchain."),
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt" }, "Projects benefit from our partnership, providing complimentary audits by our team of blockchain experts and developers and a dedicated community ready to back them."),
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt" }, "Only the best projects and teams who meet our strict evaluations will be allowed to raise funds with Coinxpad launchpad platform."),
                            react_1["default"].createElement(core_1.Typography, { component: "p", className: "about_txt" }, "Investors benefit from our approach by having access to secure, trustworthy projects that have the highest chance to succeed.")),
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, md: 5, className: "about_imgsc", "data-aos": "fade-left", "data-aos-duration": "1400", "data-aos-delay": "1400" },
                            react_1["default"].createElement(core_1.Box, { component: "img", src: "/images/about_img.png", className: "img-fluid", alt: "" }))))))));
}
exports["default"] = AboutUs;

//# sourceMappingURL=AboutUs.js.map
