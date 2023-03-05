"use strict";
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 6219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx


function Navbar({ state , activeController  }) {
    const svg_base_class = "p-2 md:hidden rounded-md stroke-lavender-500 con ";
    const borderLink = "before:absolute before:w-0 before:border-b-lavender-600 before:h-full before:border-b-4 before:py-[13px] before:hover:w-full rounded-md before:hover:transition-all before:hover:duration-300 before:hover:ease-in before:transition-all before:ease-out before:duration-300";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full flex justify-between items-center py-6 px-4 xl:p-6 box-border max-w-[1200px] sticky xl:mx-auto z-30 top-0 bg-[rgba(255,255,255,.85)] backdrop-blur-sm",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: "/logo.png",
                alt: "logo",
                width: 60
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: state === "active" ? svg_base_class + "active" : svg_base_class,
                onClick: ()=>activeController(),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    viewBox: "0 -10 100 100",
                    className: "w-[30px]",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m 20 20 h 60 ",
                            className: "ham-path-1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m 20 40 h 60 ",
                            className: "ham-path-2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "m 20 60 h 60 ",
                            className: "ham-path-3"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "hidden md:flex gap-x-12 xl:gap-x-16 box-border px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: `font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`,
                        children: "Home"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        className: `font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`,
                        children: "About"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/projects",
                        className: `font-semibold cursor pointer relative text-lavender-400 text-lg ${borderLink}`,
                        children: "Projects"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/Navlink.jsx




function Navlink({ isActive , Activetoogle  }) {
    const containerRef = (0,external_react_.useRef)();
    const currentLoc = (0,router_.useRouter)();
    const baseClass = "text-xl w-[300px] bg-lavender-600 border-white border-2 rounded-md py-3 px-4 font-bold text-white hover:translate-x-[20px] hover:transition-all hover:duration-300 hover:ease-in transition-transform duration-300 ease-out";
    const activeClass = "text-xl w-[300px] bg-white rounded-md py-3 px-4 font-bold text-lavender-600 transition-transform duration-300 ease-out transition-transform duration-300 ease-out";
    function handleClick() {
        console.log(containerRef.current.className.add);
        Activetoogle();
    }
    function getState(loc) {
        console.log(currentLoc.pathname, loc);
        if (currentLoc.pathname === loc) {
            return activeClass;
        } else {
            return baseClass;
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: containerRef,
        className: `md:hidden bg-lavender-600 h-screen w-full fixed z-20 ${isActive === "active" ? "translate-y-0 opacity-1 transition-all ease-in duration-500" : "translate-y-[-100%] opacity-0 transition-all ease duration-500"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative top-[50%] w-full grid place-items-center gap-y-[30px]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    onClick: ()=>handleClick(),
                    className: getState("/"),
                    children: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    className: getState("/about"),
                    onClick: ()=>handleClick(),
                    children: "About"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/projects",
                    className: getState("/projects"),
                    onClick: ()=>handleClick(),
                    children: "Project"
                })
            ]
        })
    });
}
/* harmony default export */ const components_Navlink = (Navlink);

;// CONCATENATED MODULE: ./src/components/Footer.jsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full flex items-center justify-center bg-white py-12 px-4 md:py-12 overflow-hidden md:px-10 mt-auto",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full flex items-center mx-auto md:mx-0 px-2 box-border justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full md:w-max",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "font-semibold text-base text-center md:text-left md:text-lg",
                            children: "Designed and Created by"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-bold text-2xl text-center md:text-left md:text-4xl",
                            children: "Alvin Setya Pranata"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex max-w-[300px] mt-8 md:mt-12 gap-x-[60px] justify-center md:justify-start items-center px-2 mx-auto",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://www.instagram.com/alvinsetya__p/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/ig.png",
                                        alt: "ig-icon",
                                        className: "w-[30px] md:w-[40px]"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://github.com/AlvinSetyaPranata",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/github.png",
                                        alt: "ig-icon",
                                        className: "w-[30px] md:w-[40px]"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "md:grid place-items-center hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "font-semibold text-center whitespace-nowrap text-xl",
                            children: "This website is built on"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-center items-center gap-x-[40px] mt-[20px] w-full",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/tailwind.svg",
                                    className: "w-[40px]",
                                    alt: "logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/nextjs.png",
                                    alt: "logo",
                                    className: "w-[50px] flex-shrink-0 flex-grow-0"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/framer.png",
                                    alt: "logo",
                                    className: "w-[35px] flex-shrink-0 flex-grow-0"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/pages/Layout.jsx





function Layout({ children  }) {
    const [active, setActive] = (0,external_react_.useState)("");
    const activeToggle = ()=>{
        if (active === "active") {
            setActive("");
        } else {
            setActive("active");
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-w-screen h-max",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navlink, {
                isActive: active,
                Activetoogle: activeToggle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {
                state: active,
                activeController: activeToggle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Suspense, {
                fallback: "<p>Loading....</p>",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "overflow-x-hidden",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}
/* harmony default export */ const pages_Layout = (Layout);


/***/ })

};
;