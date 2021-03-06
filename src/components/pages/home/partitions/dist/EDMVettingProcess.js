"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_bootstrap_1 = require("react-bootstrap");
var react_plx_1 = require("react-plx");
var textData = [
    {
        start: 'self',
        duration: '370',
        properties: [
            {
                startValue: 400,
                endValue: 0,
                unit: 'px',
                property: 'translateY'
            },
        ]
    }
];
var textData1 = [
    {
        start: 'self',
        duration: '450',
        properties: [
            {
                startValue: 300,
                endValue: 0,
                unit: 'px',
                property: 'translateY'
            },
        ]
    }
];
function EDMVettingProcess() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(core_1.Box, { className: "edmvttnsc defpddng" },
            react_1["default"].createElement(react_plx_1["default"], { className: 'StickyText sticky' },
                react_1["default"].createElement(react_bootstrap_1.Container, null,
                    react_1["default"].createElement(core_1.Grid, { container: true, spacing: 2, justifyContent: 'center' },
                        react_1["default"].createElement(react_plx_1["default"], { className: 'StickyText', parallaxData: textData1 },
                            react_1["default"].createElement(core_1.Grid, { item: true, xs: 11 },
                                react_1["default"].createElement(core_1.Box, { className: 'def_h3' },
                                    react_1["default"].createElement(core_1.Typography, { component: 'h3' }, "CoinxPad \u201CEDM\u201D Vetting Process"),
                                    react_1["default"].createElement(core_1.Box, { className: 'h3line' })))),
                        react_1["default"].createElement(react_plx_1["default"], { className: 'StickyText', parallaxData: textData },
                            react_1["default"].createElement(core_1.Grid, { item: true, xs: 11, className: "edm_bx_one edm_cmn" },
                                react_1["default"].createElement(core_1.Box, { component: "img", src: "/images/edm_l_01.png", alt: "", className: "edm_img" }),
                                react_1["default"].createElement(core_1.Typography, { component: "h6" },
                                    react_1["default"].createElement("span", { className: "nmbr_txt" }, "1"),
                                    "We review and evaluate the ",
                                    react_1["default"].createElement("span", { className: "edm_df_txt" }, "Expertise"),
                                    " of the whole Team."))),
                        react_1["default"].createElement(react_plx_1["default"], { className: 'StickyText', parallaxData: textData },
                            react_1["default"].createElement(core_1.Grid, { item: true, xs: 11, className: "edm_bx_two edm_cmn" },
                                react_1["default"].createElement(core_1.Box, { component: "img", src: "/images/edm_l_02.png", alt: "", className: "edm_img" }),
                                react_1["default"].createElement(core_1.Typography, { component: "h6" },
                                    react_1["default"].createElement("span", { className: "nmbr_txt" }, "2"),
                                    "We review and evaluate the ",
                                    react_1["default"].createElement("span", { className: "edm_df_txt" }, "Developments"),
                                    " plan and timeline."))),
                        react_1["default"].createElement(react_plx_1["default"], { className: 'StickyText StickyText_last', parallaxData: textData },
                            react_1["default"].createElement(core_1.Grid, { item: true, xs: 11, className: "edm_bx_three edm_cmn" },
                                react_1["default"].createElement(core_1.Box, { component: "img", src: "/images/edm_l_03.png", alt: "", className: "edm_img" }),
                                react_1["default"].createElement(core_1.Typography, { component: "h6" },
                                    react_1["default"].createElement("span", { className: "nmbr_txt" }, "3"),
                                    "We review and evaluate the ",
                                    react_1["default"].createElement("span", { className: "edm_df_txt" }, "Marketing Plan"),
                                    " of the project.")),
                            react_1["default"].createElement(core_1.Grid, { item: true, xs: 11, className: "edm_bx_four edm_cmn" },
                                react_1["default"].createElement(core_1.Typography, { component: "h6" },
                                    react_1["default"].createElement("span", null, "*"),
                                    "Only IF all the 3 points met our requirements we will go ahead with the listing process on our Launchpad.")))))))));
}
exports["default"] = EDMVettingProcess;

//# sourceMappingURL=EDMVettingProcess.js.map
