"use strict";
(() => {
var exports = {};
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 5946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ api_endpoints)
});

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "cors"
const external_cors_namespaceObject = require("cors");
var external_cors_default = /*#__PURE__*/__webpack_require__.n(external_cors_namespaceObject);
;// CONCATENATED MODULE: external "body-parser"
const external_body_parser_namespaceObject = require("body-parser");
var external_body_parser_default = /*#__PURE__*/__webpack_require__.n(external_body_parser_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/endpoints.ts



// import { ApiController } from './ApiController';
const app = external_express_default()();
const PORT = process.env.PORT || 4000;
app.use(external_cors_default()({
    origin: "http://localhost:PORT"
}));
app.use(external_body_parser_default().json());
app.use(external_body_parser_default().urlencoded({
    extended: true
}));
// var apiController = new ApiController();
app.get("/ui/get", (req, res)=>{
    res.send(true);
});
app.post("/api/post", async (req, res)=>{
    // let entityA = req.body.entityA;
    // await apiController.createEntityA(entityA);
    // res.send(true);
    res.send("Test success");
});
var endpoints = app.listen(PORT, ()=>{
    console.log("Serve started on port " + PORT);
});
/* harmony default export */ const api_endpoints = (endpoints);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5946));
module.exports = __webpack_exports__;

})();