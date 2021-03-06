"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var react_bootstrap_1 = require("react-bootstrap");
var react_scroll_1 = require("react-scroll");
var ContentCopy_1 = require("@material-ui/icons/ContentCopy");
var react_plx_1 = require("react-plx");
var moon = [
    {
        start: 'self',
        duration: '1500',
        properties: [
            {
                startValue: 0,
                endValue: 600,
                unit: 'px',
                property: 'translateY'
            },
        ]
    }
];
function BannerSection() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(core_1.Box, { className: 'bannersc' },
            react_1["default"].createElement(react_plx_1["default"], { className: 'img', parallaxData: moon }, " "),
            react_1["default"].createElement(react_bootstrap_1.Container, null,
                react_1["default"].createElement(core_1.Grid, { container: true, spacing: 2, justifyContent: 'center' },
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                        react_1["default"].createElement(core_1.Box, { className: 'bnnr_sc01' },
                            react_1["default"].createElement(core_1.Typography, { component: 'h1', "data-aos": "fade-zoom-in", "data-aos-duration": "2000" }, "CoinxPad is the first Cex / Dex Multi-chain IDO Launchpad"),
                            react_1["default"].createElement(core_1.Typography, { component: 'p', "data-aos": "fade-zoom-in", "data-aos-delay": "1200", "data-aos-duration": "2000" }, "CoinxPad is where you get access to the best new tokens before they list on other centralized or decentralized exchanges."))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                        react_1["default"].createElement(core_1.Box, { className: 'bnnr_sc02', "data-aos": "fade-zoom-in", "data-aos-delay": "1700", "data-aos-duration": "2000" },
                            react_1["default"].createElement(core_1.Button, { href: '/projects', variant: 'outlined', color: 'primary', className: 'def_btn_scndr' }, "View all Projects"),
                            react_1["default"].createElement(core_1.Button, { variant: 'contained', color: 'primary', className: 'def_btn_prmr' },
                                "Join CoinxPad Presale (Soon)\u00A0",
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/uncrplg.png', alt: '', height: '25px' })),
                            react_1["default"].createElement("a", { href: "https://docs.google.com/forms/d/10HbgC6VgmWk48uUkjUhaOFfujlcG4L91V2PFMSAGaMA", target: "_blank", className: 'def_btn_thrd def_btn_thrd_a' }, "Apply for IDO"))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                        react_1["default"].createElement(core_1.Box, { className: 'bnnr_sc03', "data-aos": "zoom-in", "data-aos-delay": "2100", "data-aos-duration": "1200" },
                            react_1["default"].createElement("a", { href: 'https://twitter.com/coinxpad', className: 'scla_ic', target: "_blank" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/twttr_ic.svg' })),
                            react_1["default"].createElement("a", { href: 'https://t.me/Coinxpad', className: 'scla_ic', target: "_blank" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/tlgrm_ic.svg' })),
                            react_1["default"].createElement("a", { href: 'mailto:support@coinxpad.io', className: 'scla_ic' },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/email_ic.svg' })))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                        react_1["default"].createElement(core_1.Box, { className: 'bnnr_sc04 trigger', "data-aos": "zoom-in", "data-aos-duration": "1200" },
                            react_1["default"].createElement(core_1.Box, { className: 'def_h3' },
                                react_1["default"].createElement(core_1.Typography, { component: 'h3' }, "Contract Address"),
                                react_1["default"].createElement(core_1.Box, { className: 'h3line' })),
                            react_1["default"].createElement(core_1.Box, { className: 'addrssbx' },
                                react_1["default"].createElement(core_1.Typography, { component: 'label' },
                                    react_1["default"].createElement("span", { className: "smtxt" }, "(soon)")),
                                react_1["default"].createElement(ContentCopy_1["default"], { onClick: function () {
                                        navigator.clipboard.writeText('0x361F3D81E9B249cFaFa7a047d9225c10323F10Bd');
                                    } })))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                        react_1["default"].createElement(core_1.Box, { className: 'clnt_bx' },
                            react_1["default"].createElement(core_1.Box, { className: "img_wt_cntnt", "data-aos": "fade-zoom-in", "data-aos-duration": "1200" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/clnt_01.png', alt: '' })),
                            react_1["default"].createElement(core_1.Box, { className: "img_wt_cntnt", "data-aos": "fade-zoom-in", "data-aos-duration": "1200", "data-aos-delay": "400" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/clnt_02.png', alt: '' })),
                            react_1["default"].createElement(core_1.Box, { className: "img_wt_cntnt", "data-aos": "fade-zoom-in", "data-aos-duration": "1200", "data-aos-delay": "800" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/clnt_03.png', alt: '' }),
                                react_1["default"].createElement(core_1.Typography, { component: "h6" }, "(soon)")),
                            react_1["default"].createElement(core_1.Box, { className: "img_wt_cntnt img_wt_cntnt_v2", "data-aos": "fade-zoom-in", "data-aos-duration": "1200", "data-aos-delay": "1200" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/clnt_04.png', alt: '' }),
                                react_1["default"].createElement(core_1.Typography, { component: "h6" }, "(soon)")),
                            react_1["default"].createElement(core_1.Box, { className: "img_wt_cntnt", "data-aos": "fade-zoom-in", "data-aos-duration": "1200", "data-aos-delay": "1600" },
                                react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/clnt_05.png', alt: '' })))),
                    react_1["default"].createElement(core_1.Grid, { item: true, xs: 11, className: 'ftrs_sc' },
                        react_1["default"].createElement(react_scroll_1.Element, { name: 'FeaturesSc' },
                            react_1["default"].createElement(core_1.Grid, { container: true, spacing: 3 },
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12 },
                                    react_1["default"].createElement(core_1.Box, { className: 'def_h3' },
                                        react_1["default"].createElement(core_1.Typography, { component: 'h3' }, "Features"),
                                        react_1["default"].createElement(core_1.Box, { className: 'h3line' }))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic01.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "5% redistributed in USDT"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "5% of every transaction is redistributed to all holders. Hold $CXPAD tokens, earn USDT.\u00A0A minimum of 200000 tokens is required in order to receive rewards."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "200" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic02.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "3% Auto Liquidity Pool"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "3% of every transaction contributes towards generating liquidity that goes automatically into PancakeSwap."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "400" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic03.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "2% Marketing"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "2% of every transaction is allocated in marketing budget and contributes to fuel platform developments and aggressive promotions around all the blockchain space."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "600" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic04.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "USDT paid Automatically every 60 mins"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "You don't need to claim USDT. They will be sent automatically to your wallet."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic05.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "Cex-Dex Launchpad"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "CoinxPad is your platform to find the best innovative projects and investments across all the blockchain networks."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "200" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic06.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "Liquidity Locked"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "Most of the initial liquidity provided will be locked on Unicrypt. The smart contract is fully audited by the German company \"Solidproof\"."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "400" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic07.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "Smart Investing"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "Our two-round system and max cap allocation for each IDO allow all holders, small and large to have access to high-quality projects."))),
                                react_1["default"].createElement(core_1.Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, className: 'ftrinfoHover' },
                                    react_1["default"].createElement(core_1.Box, { className: 'ftrinfo', "data-aos": "fade-up", "data-aos-duration": "900", "data-aos-delay": "600" },
                                        react_1["default"].createElement(core_1.Box, { component: 'img', src: '/images/ftr_ic08.png', className: 'img-fluid', alt: '' }),
                                        react_1["default"].createElement(core_1.Typography, { component: 'h4' }, "Safer Investing"),
                                        react_1["default"].createElement(core_1.Typography, { component: 'p' }, "All the projects launched will be vetted and audited to ensure Coinxpad investors more safety against scams and rugs.")))))))))));
}
exports["default"] = BannerSection;

//# sourceMappingURL=BannerSection.js.map
