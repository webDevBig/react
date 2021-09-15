"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var HomePage_1 = require("./components/pages/home/HomePage");
var ProjectDetails_1 = require("./components/pages/project-details/ProjectDetails");
var Projects_1 = require("./components/pages/projects/Projects");
var Rewards_1 = require("./components/pages/rewards/Rewards");
var Footer_1 = require("./elements/Footer");
var Header_1 = require("./elements/Header");
var getRpcUrl_1 = require("./utils/getRpcUrl");
var bsc = require("@binance-chain/bsc-use-wallet");
var Modal_1 = require("./hooks/Modal");
var privacy_1 = require("./components/pages/privacy");
var terms_1 = require("./components/pages/terms");
var Whitepaper_1 = require("./components/pages/whitepaper/Whitepaper");
var FullCalendarPage_1 = require("./components/pages/calendar/FullCalendarPage");
var aos_1 = require("aos");
require("aos/dist/aos.css");
aos_1["default"].init();
function App() {
    var rpcUrl = getRpcUrl_1["default"]();
    var chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10);
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement(bsc.UseWalletProvider, { chainId: chainId, connectors: {
                walletconnect: { rpcUrl: rpcUrl },
                bsc: bsc
            } },
            react_1["default"].createElement(Modal_1.ModalProvider, null,
                react_1["default"].createElement("div", { className: 'App' },
                    react_1["default"].createElement(Header_1["default"], null),
                    react_1["default"].createElement(react_router_dom_1.Switch, null,
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/', component: HomePage_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/projects', component: Projects_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/project-details', component: ProjectDetails_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/rewards', component: Rewards_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/privacy', component: privacy_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/terms', component: terms_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/whitepaper', component: Whitepaper_1["default"] }),
                        react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: '/full-calendar', component: FullCalendarPage_1["default"] })),
                    react_1["default"].createElement(Footer_1["default"], null))))));
}
exports["default"] = App;

//# sourceMappingURL=App.js.map
