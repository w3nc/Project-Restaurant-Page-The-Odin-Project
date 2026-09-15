/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/JIBurrito.woff2 */ \"./src/font/JIBurrito.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/JIBurrito.woff */ \"./src/font/JIBurrito.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/los-pollos-hermanos2.jpg */ \"./src/images/los-pollos-hermanos2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/lph-inside.jpeg */ \"./src/images/lph-inside.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Ji Burrito\";\n  src:\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"woff2\"),\n    url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"woff\");\n  font-weight: normal;\n  font-style: normal;\n  font-display: swap;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: \"Ji Burrito\";\n}\nheader {\n  background-color: #063a76;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  z-index: 1000;\n  background-color: transparent;\n  transition:\n    background-color 0.4s ease,\n    box-shadow 0.4s ease;\n}\n\nheader.scrolled {\n  background-color: #1e3a8a;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px 50px;\n  transition: padding 0.4s ease;\n}\n\nheader.scrolled nav {\n  padding: 15px 50px;\n}\n\n.logo-link {\n  text-decoration: none;\n  display: inline-block;\n  transition: transform 0.3s ease;\n}\n\n.logo-link:hover {\n  transform: scale(1.05);\n}\n\n.logo-link .logo-row-1,\n.logo-link .logo-row-2 {\n  color: #ffd700;\n}\n\nnav ul {\n  display: flex;\n  gap: 15px;\n  list-style-type: none;\n}\n\n\n\n\n.nav-btn {\n  background: none;\n  border: none;\n  font-size: 1.8rem;\n\n  background: transparent;\n  border: none;\n  color: #ffd700;\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 1.1rem;\n  cursor: pointer;\n  position: relative;\n  padding: 8px 12px;\n  transition: color 0.3s ease;\n}\n\n.nav-btn::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 3px;\n  bottom: 0;\n  left: 50%;\n  background-color: #c41e3a; /* Crimson Red */\n  transition: all 0.3s ease;\n  transform: translateX(-50%);\n  border-radius: 2px;\n}\n\n.nav-btn:hover::after {\n  width: 80%;\n}\n\n.nav-btn:hover {\n  color: #ffffff;\n}\n\n.text-logo {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-family: \"Ji Burrito\", cursive;\n  line-height: 1;\n  cursor: pointer;\n}\n\nnav ul li button.active {\n  color: #FFD700; /* Bright Yellow */\n  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5); \n  position: relative;\n}\n\nnav ul li button.active::after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 80%;\n  height: 3px;\n  background-color: #FFD700;\n  border-radius: 2px;\n}\n\n.reveal {\n  opacity: 0;\n  transform: translateY(40px);\n  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); \n}\n\n\n.reveal.active {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n.logo-row-1,\n.logo-row-2 {\n  color: #ffd700;\n  text-align: center;\n\n  /*  creates a solid, clean Crimson Red outline */\n  text-shadow:\n    -2px -2px 0 #c41e3a,\n    2px -2px 0 #c41e3a,\n    -2px 2px 0 #c41e3a,\n    2px 2px 0 #c41e3a,\n    -2px 0 0 #c41e3a,\n    2px 0 0 #c41e3a,\n    0 -2px 0 #c41e3a,\n    0 2px 0 #c41e3a;\n\n  filter: drop-shadow(2px 3px 0px rgba(0, 0, 0, 0.4));\n}\n\n.logo-row-1 {\n  font-size: 1.8rem;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.logo-row-2 {\n  font-size: 2.4rem;\n  letter-spacing: 3px;\n}\n\n/* Hero section */\n\n/*  Hero Section Container  */\n.hero-section {\n  position: relative;\n  min-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 20px;\n\n  background-image:\n    linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),\n    url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  padding-top: 120px;\n}\n\n/*  Main Headline  */\n.hero-title {\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 5rem;\n  color: #ffd700;\n  margin: 0 0 10px 0;\n  line-height: 1.1;\n\n  text-shadow:\n    -3px -3px 0 #c41e3a,\n    3px -3px 0 #c41e3a,\n    -3px 3px 0 #c41e3a,\n    3px 3px 0 #c41e3a,\n    -3px 0 0 #c41e3a,\n    3px 0 0 #c41e3a,\n    0 -3px 0 #c41e3a,\n    0 3px 0 #c41e3a,\n    0 6px 10px rgba(0, 0, 0, 0.5);\n}\n\n/*  Tagline  */\n.hero-tagline {\n  font-family: \"Playfair Display\", serif;\n  font-size: 1.8rem;\n  font-style: italic;\n  color: #f5e6d3;\n  margin: 0 0 40px 0;\n  letter-spacing: 1px;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);\n}\n\n/*  CTA Button  */\n.cta-button {\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 1.5rem;\n  color: #ffd700;\n  background-color: #c41e3a;\n  border: 2px solid #ffd700;\n  padding: 15px 40px;\n  cursor: pointer;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  border-radius: 4px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);\n  transition: all 0.3s ease;\n}\n\n.cta-button:hover {\n  background-color: #ffd700;\n  color: #c41e3a;\n  border-color: #c41e3a;\n  transform: translateY(-3px);\n  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);\n}\n\n@media (max-width: 768px) {\n  .hero-title {\n    font-size: 3rem;\n    text-shadow:\n      -2px -2px 0 #c41e3a,\n      2px -2px 0 #c41e3a,\n      -2px 2px 0 #c41e3a,\n      2px 2px 0 #c41e3a;\n  }\n\n  .hero-tagline {\n    font-size: 1.2rem;\n  }\n\n  .cta-button {\n    font-size: 1.2rem;\n    padding: 12px 30px;\n  }\n}\n\n/*  Cards Section Container  */\n.cards-section {\n  background-color: #f5e6d3;\n  padding: 80px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n\n/*  Individual Card Styling  */\n.card {\n  background-color: #ffd700;\n  border: 4px solid #c41e3a;\n  border-radius: 12px;\n  padding: 40px 30px;\n  width: 280px;\n  text-align: center;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Card Hover Effect */\n.card:hover {\n  transform: translateY(-10px);\n  box-shadow: 0 15px 30px rgba(196, 30, 58, 0.3);\n}\n\n/*  Icon Styling  */\n.icon-wrapper {\n  margin-bottom: 20px;\n}\n\n.icon-wrapper svg {\n  width: 64px;\n  height: 64px;\n  stroke: #1e3a8a;\n  stroke-width: 2;\n  transition: transform 0.3s ease;\n}\n\n.card:hover .icon-wrapper svg {\n  transform: scale(1.1);\n}\n\n/* Card Heading  */\n.card h3 {\n  font-family: \"Ji Burrito\", cursive;\n  color: #1e3a8a;\n  font-size: 1.8rem;\n  margin: 0;\n  letter-spacing: 1px;\n}\n\n/*  Mobile Responsiveness  */\n@media (max-width: 768px) {\n  .cards-section {\n    padding: 50px 20px;\n    gap: 20px;\n  }\n\n  .card {\n    width: 100%;\n    max-width: 350px;\n  }\n}\n\n/*  Footer Container  */\nfooter {\n  background-color: #1e3a8a;\n  border-top: 6px solid #c41e3a;\n  padding: 70px 20px 40px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.footer-quote {\n  font-family: \"Playfair Display\", serif;\n  font-style: italic;\n  font-size: 1.6rem;\n  color: #ffd700;\n  max-width: 700px;\n  margin: 0 auto 30px;\n  line-height: 1.6;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n\n.footer-divider {\n  width: 80px;\n  height: 3px;\n  background-color: #c41e3a;\n  border: none;\n  margin: 0 auto 30px;\n  opacity: 0.8;\n}\n\n.footer-branding {\n  font-family: \"Ji Burrito\", cursive;\n  color: #f5e6d3;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  margin: 0;\n  opacity: 0.85;\n}\n\n@media (max-width: 768px) {\n  .footer-quote {\n    font-size: 1.2rem;\n  }\n\n  footer {\n    padding: 50px 20px 30px;\n  }\n}\n\n/*  Menu Hero Section  */\n.menu-hero {\n  background-image:\n    linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)),\n    url(${___CSS_LOADER_URL_REPLACEMENT_3___}); /* Spices background */\n  background-size: contain;\n  background-position: center;\n  padding: 120px 20px 60px; /* Extra top padding for fixed header */\n  text-align: center;\n}\n\n.menu-title {\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 4rem;\n  color: #ffd700;\n  margin: 0 0 10px;\n  text-shadow:\n    -2px -2px 0 #c41e3a,\n    2px -2px 0 #c41e3a,\n    -2px 2px 0 #c41e3a,\n    2px 2px 0 #c41e3a;\n}\n\n.menu-subtitle {\n  font-family: \"Playfair Display\", serif;\n  font-style: italic;\n  font-size: 1.4rem;\n  color: #f5e6d3;\n  margin: 0;\n}\n\n/* Menu Container  */\n.menu-container {\n  background-color: #f5e6d3;\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 60px 20px;\n}\n\n/*  Categories  */\n.menu-category {\n  margin-bottom: 60px;\n}\n\n.category-title {\n  font-family: \"Ji Burrito\", cursive;\n  color: #1e3a8a;\n  font-size: 2.2rem;\n  text-align: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n\n.category-title::after {\n  content: \"\";\n  display: block;\n  width: 60px;\n  height: 4px;\n  background-color: #c41e3a;\n  margin: 10px auto 0;\n  border-radius: 2px;\n}\n\n.menu-grid {\n  display: grid;\n\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 30px;\n}\n\n.menu-card {\n  background-color: #ffffff;\n  border: 2px solid #e0d0c0;\n  border-radius: 12px;\n  overflow: hidden;\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n  display: flex;\n  flex-direction: column;\n}\n\n.menu-card:hover {\n  transform: translateY(-6px);\n  border-color: #c41e3a; /* Crimson Red border on hover */\n  box-shadow: 0 12px 24px rgba(196, 30, 58, 0.15);\n}\n\n/*  Image Section  */\n.card-image {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  overflow: hidden;\n  background-color: #eee;\n}\n\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.4s ease;\n}\n\n.menu-card:hover .card-image img {\n  transform: scale(1.05);\n}\n\n/*  Text Content Section  */\n.card-content {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 10px;\n  gap: 10px;\n}\n\n.item-name {\n  font-family: \"Playfair Display\", serif;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #2d2d2d;\n  margin: 0;\n  line-height: 1.3;\n}\n\n.item-price {\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 1.3rem;\n  color: #c41e3a;\n  white-space: nowrap;\n}\n\n.item-desc {\n  font-family: \"Playfair Display\", serif;\n  font-style: italic;\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n  line-height: 1.5;\n}\n\n/*  Reservations Hero  */\n.res-hero {\n  height: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n}\n\n.res-title {\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 4.5rem;\n  color: #ffd700;\n  margin: 0;\n  text-shadow:\n    -3px -3px 0 #c41e3a,\n    3px -3px 0 #c41e3a,\n    -3px 3px 0 #c41e3a,\n    3px 3px 0 #c41e3a;\n}\n\n/*  Main Container  */\n.res-container {\n  background-color: #f5e6d3;\n  padding: 60px 20px;\n  min-height: 600px;\n}\n\n.res-layout {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.5fr 1fr;\n  gap: 40px;\n  align-items: start;\n}\n\n.res-form-card {\n  background-color: #ffffff;\n  padding: 30px;\n  border-radius: 12px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n}\n\n.booking-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.booking-form input,\n.booking-form select,\n.booking-form textarea {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: \"Playfair Display\", serif;\n  font-size: 1rem;\n  box-sizing: border-box;\n  transition: border-color 0.3s;\n}\n\n.booking-form input:focus,\n.booking-form select:focus,\n.booking-form textarea:focus {\n  outline: none;\n  border-color: #1e3a8a;\n}\n\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n}\n\n/* Submit Button */\n.submit-btn {\n  background-color: #c41e3a;\n  color: #ffd700;\n  border: none;\n  padding: 15px;\n  font-family: \"Ji Burrito\", cursive;\n  font-size: 1.3rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition:\n    background-color 0.3s,\n    transform 0.2s;\n  margin-top: 10px;\n}\n\n.submit-btn:hover {\n  background-color: #a01830;\n  transform: translateY(-2px);\n}\n\n/*  Right Sidebar   */\n.res-sidebar {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.info-card {\n  background-color: #1e3a8a;\n  color: #ffffff;\n  padding: 25px;\n  border-radius: 12px;\n  box-shadow: 0 5px 15px rgba(30, 58, 138, 0.2);\n}\n\n.info-card h3 {\n  font-family: \"Ji Burrito\", cursive;\n  color: #ffd700;\n  margin: 0 0 8px 0;\n  font-size: 1.4rem;\n}\n\n.info-card p {\n  font-family: \"Playfair Display\", serif;\n  margin: 0;\n  font-size: 1.1rem;\n}\n\n@media (max-width: 768px) {\n  .res-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .res-title {\n    font-size: 3rem;\n  }\n}\n\n\n/*  Story Hero Section  */\n.story-hero {\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n  padding: 20px;\n}\n\n.story-title {\n  font-family: 'Ji Burrito', cursive;\n  font-size: 4.5rem;\n  color: #FFD700;\n  margin: 0 0 15px;\n  text-shadow: \n    -3px -3px 0 #C41E3A, 3px -3px 0 #C41E3A, \n    -3px 3px 0 #C41E3A, 3px 3px 0 #C41E3A;\n}\n\n.story-subtitle {\n  font-family: 'Playfair Display', serif;\n  font-style: italic;\n  font-size: 1.5rem;\n  color: #F5E6D3;\n  margin: 0;\n}\n\n\n.story-narrative {\n  background-color: #F5E6D3;\n  padding: 80px 20px;\n}\n\n.narrative-container {\n  max-width: 1100px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n\n.story-text {\n  padding-right: 20px;\n}\n\n.section-heading {\n  font-family: 'Ji Burrito', cursive;\n  color: #1E3A8A; /* Royal Blue */\n  font-size: 2.2rem;\n  margin: 0 0 25px;\n  position: relative;\n}\n\n.section-heading::after {\n  content: '';\n  display: block;\n  width: 50px;\n  height: 3px;\n  background-color: #C41E3A;\n  margin-top: 10px;\n}\n\n.story-text p {\n  font-family: 'Playfair Display', serif;\n  font-size: 1.1rem;\n  line-height: 1.8;\n  color: #2D2D2D;\n  margin-bottom: 20px;\n}\n\n.story-image img {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0 15px 40px rgba(0,0,0,0.15);\n  border: 4px solid #FFFFFF;\n}\n\n\n.story-values {\n  background-color: #FFFFFF;\n  padding: 80px 20px;\n  text-align: center;\n}\n\n.values-heading {\n  font-family: 'Ji Burrito', cursive;\n  color: #1E3A8A;\n  font-size: 2.5rem;\n  margin: 0 0 50px;\n}\n\n.values-container {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 30px;\n}\n\n.value-card {\n  background-color: #F5E6D3;\n  padding: 40px 30px;\n  border-radius: 12px;\n  border: 3px solid #1E3A8A;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.value-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 30px rgba(30, 58, 138, 0.2);\n  border-color: #C41E3A;\n}\n\n.value-icon {\n  font-size: 3rem;\n  margin-bottom: 15px;\n}\n\n.value-title {\n  font-family: 'Ji Burrito', cursive;\n  color: #C41E3A;\n  font-size: 1.8rem;\n  margin: 0 0 15px;\n}\n\n.value-desc {\n  font-family: 'Playfair Display', serif;\n  font-style: italic;\n  color: #2D2D2D;\n  margin: 0;\n  line-height: 1.6;\n}\n\n\n@media (max-width: 768px) {\n  .narrative-container {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  \n  .story-text {\n    padding-right: 0;\n  }\n  \n  .story-title {\n    font-size: 3rem;\n  }\n  \n  .values-container {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/*  Contact Hero  */\n.contact-hero {\n  height: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n}\n\n.contact-title {\n  font-family: 'Ji Burrito', cursive;\n  font-size: 4.5rem;\n  color: #FFD700;\n  margin: 0 0 10px;\n  text-shadow: \n    -3px -3px 0 #C41E3A, 3px -3px 0 #C41E3A, \n    -3px 3px 0 #C41E3A, 3px 3px 0 #C41E3A;\n}\n\n.contact-subtitle {\n  font-family: 'Playfair Display', serif;\n  font-style: italic;\n  font-size: 1.5rem;\n  color: #F5E6D3;\n  margin: 0;\n}\n\n\n.contact-container {\n  background-color: #F5E6D3;\n  padding: 60px 20px;\n  min-height: 600px;\n}\n\n\n.contact-layout {\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1.2fr; \n  gap: 50px;\n  align-items: start;\n}\n\n\n.contact-info {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n}\n\n.info-block {\n  background-color: #FFFFFF;\n  padding: 25px;\n  border-radius: 12px;\n  border-left: 5px solid #C41E3A; \n  box-shadow: 0 5px 15px rgba(0,0,0,0.05);\n}\n\n.info-block h3 {\n  font-family: 'Ji Burrito', cursive;\n  color: #1E3A8A; \n  font-size: 1.4rem;\n  margin: 0 0 10px;\n}\n\n.info-block p {\n  font-family: 'Playfair Display', serif;\n  color: #2D2D2D;\n  margin: 0;\n  font-size: 1.1rem;\n  line-height: 1.5;\n}\n\n\n.map-container {\n  width: 100%;\n  height: 300px; \n  border-radius: 12px;\n  overflow: hidden; \n  box-shadow: 0 5px 15px rgba(0,0,0,0.1);\n  border: 2px solid #FFFFFF;\n}\n\n.map-container iframe {\n  width: 100%;\n  height: 100%;\n  display: block; \n}\n\n\n.contact-form-card {\n  background-color: #FFFFFF;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.08);\n}\n\n.form-heading {\n  font-family: 'Ji Burrito', cursive;\n  color: #1E3A8A;\n  font-size: 2rem;\n  margin: 0 0 25px;\n  text-align: center;\n}\n\n.message-form {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n}\n\n.message-form input,\n.message-form textarea {\n  width: 100%;\n  padding: 12px 15px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: 'Playfair Display', serif;\n  font-size: 1rem;\n  box-sizing: border-box;\n  transition: border-color 0.3s;\n}\n\n.message-form input:focus,\n.message-form textarea:focus {\n  outline: none;\n  border-color: #1E3A8A;\n}\n\n\n.send-btn {\n  background-color: #C41E3A;\n  color: #FFD700;\n  border: none;\n  padding: 15px;\n  font-family: 'Ji Burrito', cursive;\n  font-size: 1.3rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.3s, transform 0.2s;\n  margin-top: 10px;\n}\n\n.send-btn:hover {\n  background-color: #a01830;\n  transform: translateY(-2px);\n}\n\n\n@media (max-width: 768px) {\n  .contact-layout {\n    grid-template-columns: 1fr;\n  }\n  \n  .contact-title {\n    font-size: 3rem;\n  }\n  \n  .contact-form-card {\n    padding: 25px;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/font/JIBurrito.woff"
/*!*********************************!*\
  !*** ./src/font/JIBurrito.woff ***!
  \*********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6a19e75ece8e42557756.woff\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/font/JIBurrito.woff?\n}");

/***/ },

/***/ "./src/font/JIBurrito.woff2"
/*!**********************************!*\
  !*** ./src/font/JIBurrito.woff2 ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"224d83c94f060bbd6603.woff2\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/font/JIBurrito.woff2?\n}");

/***/ },

/***/ "./src/images/bacon-egg.jpg"
/*!**********************************!*\
  !*** ./src/images/bacon-egg.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fa77c2cc192c71da2ba9.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/bacon-egg.jpg?\n}");

/***/ },

/***/ "./src/images/chicken-tenders.jpg"
/*!****************************************!*\
  !*** ./src/images/chicken-tenders.jpg ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"41aeae1056a95842ae96.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/chicken-tenders.jpg?\n}");

/***/ },

/***/ "./src/images/loaded-nachos.jpg"
/*!**************************************!*\
  !*** ./src/images/loaded-nachos.jpg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"abce1b3c1c233f9258c8.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/loaded-nachos.jpg?\n}");

/***/ },

/***/ "./src/images/los-pollos-hermanos2.jpg"
/*!*********************************************!*\
  !*** ./src/images/los-pollos-hermanos2.jpg ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"04188cd8013296602f29.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/los-pollos-hermanos2.jpg?\n}");

/***/ },

/***/ "./src/images/lph-inside.jpeg"
/*!************************************!*\
  !*** ./src/images/lph-inside.jpeg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a9190da58f6ef5f96bae.jpeg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/lph-inside.jpeg?\n}");

/***/ },

/***/ "./src/images/nacho-gus.jpg"
/*!**********************************!*\
  !*** ./src/images/nacho-gus.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c4b7b6beab837604b2a6.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/nacho-gus.jpg?\n}");

/***/ },

/***/ "./src/images/pollos-chicken.jpg"
/*!***************************************!*\
  !*** ./src/images/pollos-chicken.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a06ad2a33735c57b2ebb.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/pollos-chicken.jpg?\n}");

/***/ },

/***/ "./src/images/pollos-drink.jpg"
/*!*************************************!*\
  !*** ./src/images/pollos-drink.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e28c7d15a4f6353e1306.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/pollos-drink.jpg?\n}");

/***/ },

/***/ "./src/images/pollos-inside2.jpg"
/*!***************************************!*\
  !*** ./src/images/pollos-inside2.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e8f3475bc0e039accc01.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/pollos-inside2.jpg?\n}");

/***/ },

/***/ "./src/images/pollos-wings.jpg"
/*!*************************************!*\
  !*** ./src/images/pollos-wings.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b20e83ea9365598be05c.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/pollos-wings.jpg?\n}");

/***/ },

/***/ "./src/images/reserve-bg.jpg"
/*!***********************************!*\
  !*** ./src/images/reserve-bg.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9e8e2349c2a8d5dae6d1.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/reserve-bg.jpg?\n}");

/***/ },

/***/ "./src/images/saul-coffee.jpg"
/*!************************************!*\
  !*** ./src/images/saul-coffee.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"27231cebb3681d65c3b4.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/saul-coffee.jpg?\n}");

/***/ },

/***/ "./src/images/store-outside.jpg"
/*!**************************************!*\
  !*** ./src/images/store-outside.jpg ***!
  \**************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a8e8c0b8baa53231bacf.jpg\";\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/images/store-outside.jpg?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayContact: () => (/* binding */ displayContact)\n/* harmony export */ });\n/* harmony import */ var _images_pollos_inside2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pollos-inside2.jpg */ \"./src/images/pollos-inside2.jpg\");\n\n\nfunction displayContact() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const hero = document.createElement(\"section\");\n  hero.className = \"contact-hero\";\n\n  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${_images_pollos_inside2_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;\n\n  hero.innerHTML = `\n    <h1 class=\"contact-title\">CONTACT US</h1>\n    <p class=\"contact-subtitle\">We'd love to hear from you.</p>\n  `;\n\n  const mainContainer = document.createElement(\"section\");\n  mainContainer.className = \"contact-container\";\n\n  mainContainer.innerHTML = `\n    <div class=\"contact-layout\">\n      \n      <!-- Left Side: Contact Info & Map -->\n      <div class=\"contact-info reveal\">\n        <div class=\"info-block\">\n          <h3>Visit Us</h3>\n          <p>9809 Margo St NE<br>Albuquerque, NM 87112</p>\n        </div>\n        <div class=\"info-block\">\n          <h3>Call Us</h3>\n          <p>(505) 555-0199</p>\n        </div>\n        <div class=\"info-block\">\n          <h3>️ Email Us</h3>\n          <p>gusfring@lospollos.com</p>\n        </div>\n        \n        <!-- Map Placeholder -->\n        <div class=\"map-placeholder\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1789485438651!5m2!1sen!2sph!6m8!1m7!1sR0E3ZbN9UH9nqCqvmdsLpw!2m2!1d35.01444340288661!2d-106.6861062453035!3f255.4685783477395!4f-11.726061857888027!5f0.7820865974627469\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>\n        </div>\n      </div>\n\n      <!-- Right Side: Message Form -->\n      <div class=\"contact-form-card reveal\">\n        <h2 class=\"form-heading\">Send a Message</h2>\n        <form class=\"message-form\" onsubmit=\"event.preventDefault(); alert('Message received. We will be in touch. - G.F.');\">\n          <input type=\"text\" placeholder=\"Your Name\" required>\n          <input type=\"email\" placeholder=\"Your Email\" required>\n          <input type=\"text\" placeholder=\"Subject\" required>\n          <textarea placeholder=\"How can we help you?\" rows=\"5\" required></textarea>\n          <button type=\"submit\" class=\"send-btn\">SEND MESSAGE</button>\n        </form>\n      </div>\n\n    </div>\n  `;\n\n  content.append(hero, mainContainer);\n\n  window.addEventListener(\"scroll\", () => {\n    const header = document.querySelector(\"header\");\n\n    if (window.scrollY > 50) {\n      header.classList.add(\"scrolled\");\n    } else {\n      header.classList.remove(\"scrolled\");\n    }\n  });\n\n  initRevealAnimations();\n}\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayHome: () => (/* binding */ displayHome)\n/* harmony export */ });\nfunction displayHome() {\n  // container\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  // hero section\n  const hero = document.createElement(\"section\");\n  hero.className = \"hero-section reveal\";\n  const heroTitle = document.createElement(\"h1\");\n  heroTitle.className = \"hero-title\";\n  heroTitle.textContent = \"LOS POLLOS HERMANOS\";\n\n  const heroTagLine = document.createElement(\"p\");\n  heroTagLine.className = \"hero-tagline\";\n  heroTagLine.textContent = \"Excellence in Every Detail\";\n\n  const ctaButton = document.createElement(\"button\");\n  ctaButton.className = \"cta-button\";\n  ctaButton.textContent = \"RESERVE A TABLE\";\n\n  hero.append(heroTitle, heroTagLine, ctaButton);\n\n  //   cards\n  const cards = document.createElement(\"section\");\n  cards.className = \"cards-section reveal\";\n\n  const cardsData = [\n    {\n      title: \"THE MENU\",\n      icon: `<svg viewBox=\"0 0 24 24\" fill=\"none\"  stroke-width=\"2\"><path d=\"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7\"/></svg>`,\n    },\n    {\n      title: \"PRIVATE DINING\",\n      icon: `<svg viewBox=\"0 0 24 24\" fill=\"none\"  stroke-width=\"2\"><path d=\"M2 20h20M4 20V10m16 10V10M2 10h20M12 10v10\"/></svg>`,\n    },\n    {\n      title: \"THE EXPERIENCE\",\n      icon: `<svg viewBox=\"0 0 24 24\" fill=\"none\"  stroke-width=\"2\"><path d=\"M8 22h8M7 10h10M12 15v7M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z\"/></svg>`,\n    },\n  ];\n\n  cardsData.forEach((data) => {\n    const card = document.createElement(\"div\");\n    card.className = \"card\";\n\n    card.innerHTML = `\n      <div class=\"icon-wrapper\">${data.icon}</div>\n      <h3>${data.title}</h3>\n    `;\n\n    cards.append(card);\n  });\n\n  content.append(hero, cards);\n\n  window.addEventListener(\"scroll\", () => {\n    const header = document.querySelector(\"header\");\n\n    if (window.scrollY > 50) {\n      header.classList.add(\"scrolled\");\n    } else {\n      header.classList.remove(\"scrolled\");\n    }\n  });\n\n  initHomeButtons();\n  initRevealAnimations();\n}\n\nfunction initHomeButtons() {\n  \n  const reserveBtn = document.querySelector(\".cta-button\");\n  if (reserveBtn) {\n    reserveBtn.addEventListener(\"click\", () => {\n     \n      document.getElementById(\"reserve\").click();\n    });\n  }\n\n  // Feature Cards\n  const menuCard = document.querySelector(\".card:nth-child(1)\"); \n  const diningCard = document.querySelector(\".card:nth-child(2)\");\n  const experienceCard = document.querySelector(\".card:nth-child(3)\"); \n\n  if (menuCard)\n    menuCard.addEventListener(\"click\", () =>\n      document.getElementById(\"menu\").click(),\n    );\n\n  \n  if (diningCard)\n    diningCard.addEventListener(\"click\", () =>\n      document.getElementById(\"reserve\").click(),\n    );\n\n  \n  if (experienceCard)\n    experienceCard.addEventListener(\"click\", () =>\n      document.getElementById(\"story\").click(),\n    );\n}\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation.js */ \"./src/reservation.js\");\n/* harmony import */ var _story_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story.js */ \"./src/story.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const menuBtn = document.getElementById(\"menu\");\n  const reserveBtn = document.getElementById(\"reserve\");\n  const storyBtn = document.getElementById(\"story\");\n  const contactBtn = document.getElementById(\"contact\");\n\n  const logoLink = document.getElementById(\"logo-link\");\n  if (logoLink) {\n    logoLink.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      navigateTo(\"home\", _home_js__WEBPACK_IMPORTED_MODULE_1__.displayHome);\n    });\n  }\n\n  // Function to handle Active State\n  function setActiveButton(activeId) {\n    document.querySelectorAll(\"nav ul li button\").forEach((btn) => {\n      btn.classList.remove(\"active\");\n    });\n    const activeBtn = document.getElementById(activeId);\n    if (activeBtn) activeBtn.classList.add(\"active\");\n  }\n\n  // Helper function to navigate AND save the state\n  function navigateTo(pageId, displayFunction) {\n    displayFunction();\n    setActiveButton(pageId);\n\n    sessionStorage.setItem(\"currentPage\", pageId);\n  }\n\n  //  Attach Listeners using the new helper\n\n  menuBtn.addEventListener(\"click\", () => navigateTo(\"menu\", _menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu));\n  reserveBtn.addEventListener(\"click\", () =>\n    navigateTo(\"reserve\", _reservation_js__WEBPACK_IMPORTED_MODULE_3__.displayReservations),\n  );\n  storyBtn.addEventListener(\"click\", () => navigateTo(\"story\", _story_js__WEBPACK_IMPORTED_MODULE_4__.displayStory));\n  contactBtn.addEventListener(\"click\", () =>\n    navigateTo(\"contact\", _contact_js__WEBPACK_IMPORTED_MODULE_5__.displayContact),\n  );\n\n  //  Check for a saved page on load\n  const savedPage = sessionStorage.getItem(\"currentPage\");\n\n  if (savedPage === \"menu\") {\n    navigateTo(\"menu\", _menu_js__WEBPACK_IMPORTED_MODULE_2__.displayMenu);\n  } else if (savedPage === \"reserve\") {\n    navigateTo(\"reserve\", _reservation_js__WEBPACK_IMPORTED_MODULE_3__.displayReservations);\n  } else if (savedPage === \"story\") {\n    navigateTo(\"story\", _story_js__WEBPACK_IMPORTED_MODULE_4__.displayStory);\n  } else if (savedPage === \"contact\") {\n    navigateTo(\"contact\", _contact_js__WEBPACK_IMPORTED_MODULE_5__.displayContact);\n  } else {\n    navigateTo(\"logo-link\", _home_js__WEBPACK_IMPORTED_MODULE_1__.displayHome);\n  }\n});\n\nconst revealObserver = new IntersectionObserver(\n  (entries) => {\n    entries.forEach((entry) => {\n      if (entry.isIntersecting) {\n        entry.target.classList.add(\"active\");\n      }\n    });\n  },\n  { threshold: 0.15 },\n);\n\nwindow.initRevealAnimations = function () {\n  document.querySelectorAll(\".reveal\").forEach((el) => {\n    el.classList.remove(\"active\");\n    revealObserver.observe(el);\n  });\n};\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayMenu: () => (/* binding */ displayMenu)\n/* harmony export */ });\n/* harmony import */ var _images_pollos_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pollos-chicken.jpg */ \"./src/images/pollos-chicken.jpg\");\n/* harmony import */ var _images_pollos_wings_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pollos-wings.jpg */ \"./src/images/pollos-wings.jpg\");\n/* harmony import */ var _images_bacon_egg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bacon-egg.jpg */ \"./src/images/bacon-egg.jpg\");\n/* harmony import */ var _images_pollos_drink_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pollos-drink.jpg */ \"./src/images/pollos-drink.jpg\");\n/* harmony import */ var _images_saul_coffee_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/saul-coffee.jpg */ \"./src/images/saul-coffee.jpg\");\n/* harmony import */ var _images_chicken_tenders_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/chicken-tenders.jpg */ \"./src/images/chicken-tenders.jpg\");\n/* harmony import */ var _images_loaded_nachos_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/loaded-nachos.jpg */ \"./src/images/loaded-nachos.jpg\");\n\n\n\n\n\n\n\n\n\nfunction displayMenu() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const hero = document.createElement(\"section\");\n  hero.className = \"menu-hero reveal\";\n  hero.innerHTML = `\n    <h1 class=\"menu-title\">THE MENU</h1>\n    <p class=\"menu-subtitle\">Crafted with Precision. Served with Pride.</p>\n  `;\n\n  const menuData = [\n    {\n      category: \"SIGNATURE POULTRY\",\n      items: [\n        {\n          name: \"Fring's Spice Chicken\",\n          desc: \"Our famous secret-spice blend, fried to golden perfection.\",\n          price: \"$24\",\n          image: _images_pollos_chicken_jpg__WEBPACK_IMPORTED_MODULE_0__,\n        },\n        {\n          name: \"Pollos Hermanos Wings\",\n          desc: \"Tossed in our signature crimson glaze.\",\n          price: \"$16\",\n          image: _images_pollos_wings_jpg__WEBPACK_IMPORTED_MODULE_1__,\n        },\n        {\n          name: \"Nacho's Chicken Tenders\",\n          desc: \"Served with a side of homemade ranch.\",\n          image: _images_chicken_tenders_jpg__WEBPACK_IMPORTED_MODULE_5__,\n          price: \"$18\",\n        },\n      ],\n    },\n    {\n      category: \"STARTERS\",\n      items: [\n        {\n          name: \"Bacon Omellete\",\n          desc: \"Lightly scrambled, served with bacon.\",\n          price: \"$14\",\n          image: _images_bacon_egg_jpg__WEBPACK_IMPORTED_MODULE_2__,\n        },\n        {\n          name: \"Loaded Nachos\",\n          desc: \"Jalapeños, queso, and slow-cooked brisket.\",\n          price: \"$15\",\n          image: _images_loaded_nachos_jpg__WEBPACK_IMPORTED_MODULE_6__,\n        },\n        {\n          name: \"Spice Curls\",\n          desc: \"Premium, southwest-style curly fry.\",\n          price: \"$16\",\n          image:\n            \"https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=600&auto=format&fit=crop\",\n        },\n      ],\n    },\n    {\n      category: \"DRINKS\",\n      items: [\n        {\n          name: \"Los Pollos Root Beer\",\n          desc: \"Ice-cold, classic, and perfectly carbonated.\",\n          price: \"$4\",\n          image: _images_pollos_drink_jpg__WEBPACK_IMPORTED_MODULE_3__,\n        },\n        {\n          name: \"Saul's 'Better Call Saul' Coffee\",\n          desc: \"Strong, honored, and legally binding.\",\n          price: \"$5\",\n          image: _images_saul_coffee_jpg__WEBPACK_IMPORTED_MODULE_4__,\n        },\n      ],\n    },\n  ];\n\n  const menuContainer = document.createElement(\"section\");\n  menuContainer.className = \"menu-container\";\n\n  menuData.forEach((cat) => {\n    const categoryDiv = document.createElement(\"div\");\n    categoryDiv.className = \"menu-category\";\n\n    const catTitle = document.createElement(\"h2\");\n    catTitle.className = \"category-title reveal\";\n    catTitle.textContent = cat.category;\n    categoryDiv.appendChild(catTitle);\n\n    // Build individual items\n    const gridDiv = document.createElement(\"div\");\n    gridDiv.className = \"menu-grid\";\n\n    // Build individual cards\n    cat.items.forEach((item) => {\n      const card = document.createElement(\"div\");\n      card.className = \"menu-card reveal\";\n\n      card.innerHTML = `\n        <div class=\"card-image\">\n          <img src=\"${item.image}\" alt=\"${item.name}\" loading=\"lazy\">\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-header\">\n            <h3 class=\"item-name\">${item.name}</h3>\n            <span class=\"item-price\">${item.price}</span>\n          </div>\n          <p class=\"item-desc\">${item.desc}</p>\n        </div>\n      `;\n\n      gridDiv.appendChild(card);\n    });\n\n    \n    categoryDiv.appendChild(gridDiv);\n    menuContainer.appendChild(categoryDiv);\n  });\n\n  content.append(hero, menuContainer);\n\n\n\n  window.addEventListener(\"scroll\", () => {\n    const header = document.querySelector(\"header\");\n\n    if (window.scrollY > 50) {\n      header.classList.add(\"scrolled\");\n    } else {\n      header.classList.remove(\"scrolled\");\n    }\n  });\n\n    initRevealAnimations();\n}\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/menu.js?\n}");

/***/ },

/***/ "./src/reservation.js"
/*!****************************!*\
  !*** ./src/reservation.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayReservations: () => (/* binding */ displayReservations)\n/* harmony export */ });\n/* harmony import */ var _images_reserve_bg_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/reserve-bg.jpg */ \"./src/images/reserve-bg.jpg\");\n\n\nfunction displayReservations() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const hero = document.createElement(\"section\");\n  hero.className = \"res-hero\";\n\n  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(\"${_images_reserve_bg_jpg__WEBPACK_IMPORTED_MODULE_0__}\")`;\n\n  hero.innerHTML = `\n    <h1 class=\"res-title reveal\">RESERVATIONS</h1>\n  `;\n\n  const mainContainer = document.createElement(\"section\");\n  mainContainer.className = \"res-container\";\n\n  mainContainer.innerHTML = `\n    <div class=\"res-layout\">\n      \n      \n      <div class=\"res-form-card reveal\">\n        <form class=\"booking-form\" onsubmit=\"event.preventDefault(); alert('Table reserved! Gus Fring approves.');\">\n          <input type=\"text\" placeholder=\"Name\" required>\n          <input type=\"email\" placeholder=\"Email\" required>\n          <input type=\"tel\" placeholder=\"Phone\" required>\n          \n          <div class=\"form-row\">\n            <input type=\"date\" required>\n            <input type=\"time\" required>\n          </div>\n          \n          <select required>\n            <option value=\"\" disabled selected>Number of guests</option>\n            <option value=\"1\">1 Person</option>\n            <option value=\"2\">2 People</option>\n            <option value=\"3\">3 People</option>\n            <option value=\"4\">4 People</option>\n            <option value=\"5+\">5+ People</option>\n          </select>\n          \n          <textarea placeholder=\"Special requests\" rows=\"3\"></textarea>\n          \n          <button type=\"submit\" class=\"submit-btn\">CONFIRM RESERVATION</button>\n        </form>\n      </div>\n\n      \n      <div class=\"res-sidebar reveal\">\n        <div class=\"info-card\">\n          <h3>Phone:</h3>\n          <p>(505) 555-0199</p>\n        </div>\n        <div class=\"info-card\">\n          <h3>Email:</h3>\n          <p>reservations@lospollos.com</p>\n        </div>\n        <div class=\"info-card\">\n          <h3>Business Hours:</h3>\n          <p>Mon–Sun 11am–10pm</p>\n        </div>\n      </div>\n\n    </div>\n  `;\n\n  content.append(hero, mainContainer);\n\n  window.addEventListener(\"scroll\", () => {\n    const header = document.querySelector(\"header\");\n\n    if (window.scrollY > 50) {\n      header.classList.add(\"scrolled\");\n    } else {\n      header.classList.remove(\"scrolled\");\n    }\n  });\n\n  initRevealAnimations();\n}\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/reservation.js?\n}");

/***/ },

/***/ "./src/story.js"
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayStory: () => (/* binding */ displayStory)\n/* harmony export */ });\n/* harmony import */ var _images_store_outside_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/store-outside.jpg */ \"./src/images/store-outside.jpg\");\n/* harmony import */ var _images_nacho_gus_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/nacho-gus.jpg */ \"./src/images/nacho-gus.jpg\");\n\n\n\nfunction displayStory() {\n  const content = document.getElementById(\"content\");\n  content.innerHTML = \"\";\n\n  const hero = document.createElement(\"section\");\n  hero.className = \"story-hero\";\n\n  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${_images_store_outside_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;\n\n  hero.innerHTML = `\n    <h1 class=\"story-title\">OUR STORY</h1>\n    <p class=\"story-subtitle\">A Legacy of Excellence. A Commitment to Community.</p>\n  `;\n\n  const narrativeSection = document.createElement(\"section\");\n  narrativeSection.className = \"story-narrative\";\n\n  narrativeSection.innerHTML = `\n    <div class=\"narrative-container reveal\">\n      \n      <!-- Left Side: The Story Text -->\n      <div class=\"story-text\">\n        <h2 class=\"section-heading\">From Humble Beginnings</h2>\n        <p>\n          What started as a small family operation has grown into one of Albuquerque's most \n          trusted dining establishments. At Los Pollos Hermanos, we believe that great food \n          is more than just a meal, it's a promise.\n        </p>\n        <p>\n          Our founder's vision was simple: serve the finest quality poultry with uncompromising \n          standards and unwavering dedication to our community. Every dish that leaves our \n          kitchen is a testament to that commitment.\n        </p>\n        <p>\n          We take pride in our meticulous preparation, our secret family recipes, and our \n          devotion to excellence in every detail. Because when you dine with us, you're not \n          just a customer, you're family.\n        </p>\n      </div>\n\n      <!-- Right Side: Image -->\n      <div class=\"story-image\">\n        <img src=\"${_images_nacho_gus_jpg__WEBPACK_IMPORTED_MODULE_1__}\" \n             alt=\"Our Kitchen\" \n             loading=\"lazy\">\n      </div>\n\n    </div>\n  `;\n\n  const valuesSection = document.createElement(\"section\");\n  valuesSection.className = \"story-values\";\n\n  const valuesData = [\n    {\n      title: \"QUALITY\",\n      desc: \"Only the finest ingredients. Every time. No exceptions.\",\n    },\n    {\n      title: \"COMMUNITY\",\n      desc: \"Serving our neighbors with pride and respect since day one.\",\n    },\n    {\n      title: \"PRECISION\",\n      desc: \"Excellence in every detail. Perfection in every plate.\",\n    },\n  ];\n\n  const valuesContainer = document.createElement(\"div\");\n  valuesContainer.className = \"values-container\";\n\n  valuesData.forEach((value) => {\n    const card = document.createElement(\"div\");\n    card.className = \"value-card reveal\";\n    card.innerHTML = `\n      \n      <h3 class=\"value-title\">${value.title}</h3>\n      <p class=\"value-desc\">${value.desc}</p>\n    `;\n    valuesContainer.appendChild(card);\n  });\n\n  valuesSection.innerHTML = `<h2 class=\"values-heading reveal\">Our Core Values</h2>`;\n  valuesSection.appendChild(valuesContainer);\n\n  content.append(hero, narrativeSection, valuesSection);\n\n  window.addEventListener(\"scroll\", () => {\n    const header = document.querySelector(\"header\");\n\n    if (window.scrollY > 50) {\n      header.classList.add(\"scrolled\");\n    } else {\n      header.classList.remove(\"scrolled\");\n    }\n  });\n\n  initRevealAnimations();\n}\n\n\n//# sourceURL=webpack://project-restaurant-page-the-odin-project/./src/story.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;