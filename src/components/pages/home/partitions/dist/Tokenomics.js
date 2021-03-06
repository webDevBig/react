"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_bootstrap_1 = require("react-bootstrap");
var react_scroll_1 = require("react-scroll");
var react_plx_1 = require("react-plx");
var textData = [
    {
        start: 'self',
        duration: '350',
        properties: [
            {
                startValue: 20,
                endValue: -10,
                unit: 'px',
                property: 'translateX'
            }
        ],
        easing: [0.25, 0.1, 0.3, 2]
    }
];
function Tokenomics() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_scroll_1.Element, { name: "TokenomicsSc" },
            react_1["default"].createElement(core_1.Box, { className: "tknmcs_sc defpddng" },
                react_1["default"].createElement(react_bootstrap_1.Container, null,
                    react_1["default"].createElement(core_1.Grid, { container: true, spacing: 2, justifyContent: "center" },
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, className: "text-center" },
                            react_1["default"].createElement(core_1.Box, { className: 'def_h3' },
                                react_1["default"].createElement(core_1.Typography, { component: "h3" }, "Tokenomics"),
                                react_1["default"].createElement(core_1.Box, { className: "h3line" }))),
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, md: 6, className: "tknmcs_rgt" },
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Total Supply:"),
                                    " 100,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Presale:"),
                                    " 50,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Liquidity:"),
                                    " 22,095,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Burn:"),
                                    " 13,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Developement:"),
                                    " 5,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Research & Innovation:"),
                                    " 5,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Partnership:"),
                                    " 2,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Airdrops:"),
                                    " 2,000,000,000")),
                            react_1["default"].createElement(react_plx_1["default"], { className: '', parallaxData: textData },
                                react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                    react_1["default"].createElement("span", null, "Unicrypt Fees:"),
                                    " 900,000,000"))),
                        react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, md: 6 },
                            react_1["default"].createElement(core_1.Box, { className: "circle_pro" },
                                react_1["default"].createElement(core_1.Box, { component: "img", src: "/images/grph_img1.png", className: "crclegrp_img", alt: "" }),
                                react_1["default"].createElement(core_1.Box, null,
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr01" }),
                                        react_1["default"].createElement("span", null, "50%"),
                                        "Presale"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr02" }),
                                        react_1["default"].createElement("span", null, "22.1%"),
                                        "Liquidity"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr03" }),
                                        react_1["default"].createElement("span", null, "13%"),
                                        "Burn"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr04" }),
                                        react_1["default"].createElement("span", null, "5%"),
                                        "Development"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr05" }),
                                        react_1["default"].createElement("span", null, "5%"),
                                        "Research & Innovation"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr06" }),
                                        react_1["default"].createElement("span", null, "2%"),
                                        "Partnership"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr07" }),
                                        react_1["default"].createElement("span", null, "2%"),
                                        "Airdrops"),
                                    react_1["default"].createElement(core_1.Typography, { component: "h4" },
                                        react_1["default"].createElement("span", { className: "grdts clr08" }),
                                        react_1["default"].createElement("span", null, "0.9%"),
                                        "Unicrypt fees"))))))))));
}
exports["default"] = Tokenomics;

//# sourceMappingURL=Tokenomics.js.map
