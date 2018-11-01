(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    text-align: center;\r\n}\r\n\r\n.barcode-component {\r\n    width: 100%;\r\n}\r\n\r\n.video-container {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\nvideo {\r\n    border-radius: 6px;\r\n    width: 320px; \r\n    height: 240px;\r\n    position: absolute;\r\n    left: 28px;\r\n    top: 12px;\r\n    border: 4px solid #000;\r\n}\r\n\r\n.button-container {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-left: 28px;\r\n}\r\n\r\nbutton {\r\n    padding: 10px;\r\n}\r\n\r\ncanvas.drawing, canvas.drawingBuffer {\r\n    border-radius: 6px;\r\n    width: 320px; \r\n    height: 240px;\r\n    position: absolute;\r\n    left: 28px;\r\n    top: 12px;\r\n}\r\n\r\n#barcode-result {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtDQUNiOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5iYXJjb2RlLWNvbXBvbmVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7IFxyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI4cHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG4uYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjhweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbmNhbnZhcy5kcmF3aW5nLCBjYW52YXMuZHJhd2luZ0J1ZmZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICB3aWR0aDogMzIwcHg7IFxyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDI4cHg7XHJcbiAgICB0b3A6IDEycHg7XHJcbn1cclxuXHJcbiNiYXJjb2RlLXJlc3VsdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"barcode-component\">\n    \n    <div class=\"video-container\">\n        <video id=\"video-player\" autoplay controls>\n            Your browser does not support HTML5 video.\n        </video>\n        <canvas id=\"scanner-canvas\" class=\"drawingBuffer\"></canvas>\n    </div>\n\n    <div class=\"button-container\"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>\n        <button type=\"button\" (click)=\"startScanner()\">Start</button>&nbsp;\n        <button type=\"button\" (click)=\"stopScanner()\">Stop</button>\n    </div>\n\n    <h2 id=\"barcode-result\"></h2>\n\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.barcode = '';
    }
    AppComponent.prototype.startScanner = function () {
        var settings = {
            decoder: { readers: ["code_128_reader", "code_39_reader"] },
            locate: true,
            inputStream: {
                name: 'Live',
                type: 'LiveStream',
                target: document.querySelector('#video-player')
            },
            locator: { patchSize: "medium" },
        };
        Quagga.init(settings, function (err) {
            if (err) {
                console.log(err);
                return;
            }
            startVideo();
            Quagga.start();
            Quagga.onDetected(function (result) {
                document.getElementById('barcode-result').innerText = 'Code: ' + result.codeResult.code;
            });
            Quagga.onProcessed(function (result) {
                drawBoxes(result);
            });
        });
    };
    AppComponent.prototype.stopScanner = function () {
        stopVideo();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var video = null;
function startVideo() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('UserMedia not supported');
        return;
    }
    var constraints = {
        audio: false,
        video: { facingMode: "environment" }
    };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
        video = document.getElementById('video-player');
        video.srcObject = stream;
    })
        .catch(function (err) {
        alert(err);
        console.log(err);
    });
}
function stopVideo() {
    Quagga.stop();
    if (video.srcObject) {
        var track = video.srcObject.getTracks()[0];
        track.stop();
    }
    video.srcObject = null;
    var canvas = document.getElementById('scanner-canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('barcode-result').innerText = '';
}
function drawBoxes(result) {
    var drawingCtx = Quagga.canvas.ctx.overlay, drawingCanvas = Quagga.canvas.dom.overlay;
    if (result) {
        if (result.boxes) {
            drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
            result.boxes.filter(function (box) {
                return box !== result.box;
            }).forEach(function (box) {
                Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 4 });
            });
        }
        if (result.box) {
            Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 4 });
        }
        if (result.codeResult && result.codeResult.code) {
            Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 6 });
        }
    }
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Julio\src\barcode\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map