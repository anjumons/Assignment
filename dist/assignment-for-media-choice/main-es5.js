(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Document</title>\n\n\n</head>\n\n<body>\n    <nav class=\"navbar\">\n      <div class=\"logo\">OUTTvApp</div>\n\n      <div class=\"topnav-centered\">\n        <ul>\n          <li class=\"border-right\"><a href=\"\"></a>Videos</li>\n          <li  class=\"border-right\"><a href=\"\"></a>HLIFE</li>\n          <li><a href=\"\"></a>Extra</li>\n          </ul>\n      </div>\n\n      <div class=\"topnav-right\">\n        <ul>\n          <li><a> <i class=\"fa fa-search\"></i></a></li>\n          <li class=\"user\"><a >Assessment <i class=\"fa fa-user\"></i></a>\n          <ul class=\"dropdown\">\n            <li class=\"changemode\"><a >Darkmode</a></li>\n            <li><a>Settings </a></li>\n          </ul>\n          </li>\n          </ul>\n      </div>\n      </nav>\n\n  <!-- ------------x---------------  Navigation --------------------------x-------------->\n  <!-- --------------------------main section-------------------------------------------->\n  <main>\n    <div class=\"banner-container\">\n      <div class=\"slideshow-container\">\n        <div class=\"left-arrow-box\" (click)=\"this.moveSlides(-1)\"><span class=\"arrow arrow-left\"></span></div>\n        <div class=\"right-arrow-box\" (click)=\"this.moveSlides(1)\"><span class=\"arrow arrow-right\"></span></div>\n        <div class=\"captionTextHolder\">\n          <p class=\"captionText1 slideTextFromTop\"></p>\n          <p class=\"captionText2 slideTextFromBottom \"></p>\n          <button class=\"watch-btn btn-animation\">Watch now !</button>\n        </div>\n        <div class=\"image-holder\">\n          <img src=\"https://www.maxx-xs.nl/images/visuals/visual_mxmid_279806.jpeg\">\n          <p class=\"caption-text-1\">Dropping the soap</p>\n          <p class=\"caption-text-2\">Series</p>\n        </div>\n        <div class=\"image-holder\">\n          <img src=\"https://www.maxx-xs.nl/images/visuals/visual_mxmid_279932.jpeg\">\n          <p class=\"caption-text-1\">Back To Corsica</p>\n          <p class=\"caption-text-2\">Series</p>\n        </div>\n        <div class=\"image-holder\">\n          <img src=\"https://www.maxx-xs.nl/images/visuals/visual_mxmid_279726.jpeg\">\n          <p class=\"caption-text-1\">Wasp</p>\n          <p class=\"caption-text-2\">Film</p>\n        </div>\n        <div class=\"image-holder\">\n          <img src=\"https://www.maxx-xs.nl/images/visuals/visual_mxmid_278428.jpeg\">\n          <p class=\"caption-text-1\">No Look Pass</p>\n          <p class=\"caption-text-2\">Documentary</p>\n        </div>\n      </div>\n    </div>\n    <!-- -----------------------------character section------------------------------------- -->\n    <div class=\"character-container\">\n      <div class=\"wrapper\">\n        <ul class=\"carousel\" id=\"character-slider\" data-target=\"carousel\">\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279882_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279780_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279936_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279912_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279908_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279894_back.png\"></li>\n          <li class=\"card\" data-target=\"card\"><img class=\"item\"\n              src=\"https://www.maxx-xs.nl/images/covers/large/cover_279876_back.png\"></li>\n        </ul>\n        <div class=\"button-wrapper\">\n          <div (click)=\"this.SliderArrowClicked('left','character-slider')\" data-action=\"slideLeft\"\n            class=\"left-arrow-box\"><span class=\"arrow arrow-left\"></span></div>\n          <div (click)=\"this.SliderArrowClicked('right','character-slider')\" data-action=\"slideRight\"\n            class=\"right-arrow-box\"><span class=\"arrow arrow-right\"></span></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- -------------x----------------character section---------------x---------------------- -->\n    <!-- ---------------------------------listing category section --------------------------- -->\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Series</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','series')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','series')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"series\">\n            <li *ngFor=\"let serie of series;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{serie.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{serie.Title}}</div>\n                  <div class=\"category-item-type\">series</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Flims</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','films')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','films')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"films\">\n            <li *ngFor=\"let film of films;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{film.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{film.Title}}</div>\n                  <div class=\"category-item-type\">film</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Documentary</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','doc')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','doc')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"doc\">\n            <li *ngFor=\"let documentary of documentaries;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{documentary.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{documentary.Title}}</div>\n                  <div class=\"category-item-type\">documentary</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Series</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','cat1')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','cat1')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"cat1\">\n            <li *ngFor=\"let serie of series;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{serie.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{serie.Title}}</div>\n                  <div class=\"category-item-type\">series</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Flims</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','cat2')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','cat2')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"cat2\">\n            <li *ngFor=\"let film of films;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{film.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{film.Title}}</div>\n                  <div class=\"category-item-type\">film</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"category-container\">\n      <div class=\"category-header\">\n        <h4 class=\"category-name\">Documentary</h4>\n      </div>\n      <div class=\"category-control\">\n        <div class=\"category-control-container\">\n          <i class=\"fa fa-play-circle\"></i>\n          <i class=\"fa fa-film\"></i>\n          <i class=\"fa fa-heart\"></i>\n        </div>\n      </div>\n      <div class=\"category-slider\">\n        <div class=\"\">\n          <div class=\"left-arrow-box\" (click)=\"this.SliderArrowClicked('left','cat3')\"><span\n              class=\"arrow arrow-left\"></span></div>\n          <div class=\"right-arrow-box\" (click)=\"this.SliderArrowClicked('right','cat3')\"><span\n              class=\"arrow arrow-right\"></span></div>\n          <ul class=\"carousel\" id=\"cat3\">\n            <li *ngFor=\"let documentary of documentaries;let i = index\">\n              <div class=\"category-item-box\">\n                <img src=\"{{documentary.poster}}\">\n                <div class=\"category-item-caption-holder\">\n                  <div class=\"category-item-title\">{{documentary.Title}}</div>\n                  <div class=\"category-item-type\">documentary</div>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <!-- --------------x-------------------listing category section -----x---------------------- -->\n  </main>\n  <!-----------------------------------footer-------------------------------------------------- -->\n  <footer>\n    <div class=\"footer-container\">\n      <div class=\"box\">\n        <div> <i class=\"fa fa-film\"></i></div>\n        <h2>FeedBack</h2>\n        <p>Do you have any FeedBack?</p>\n        <p>Please share it with us.</p>\n      </div>\n      <div class=\"box\">\n        <div> <i class=\"fa fa-film\"></i></div>\n        <h2>Help Center</h2>\n        <p>Ran into troubles?</p>\n        <p>Read our FAQ.</p>\n      </div>\n      <div class=\"box\">\n        <i class=\"fa fa-film\"></i>\n        <h2>Contact</h2>\n        <p>Prefer direct contact?</p>\n        <p>Message our helpdesk.</p>\n      </div>\n    </div>\n    <div class=\"footer-bottom\">\n      <ul class=\"bottom-items\">\n        <li><a>Terms and Conditions</a></li>\n        <li><a>Privacy Policy</a></li>\n        <li><a>Cookie Policy</a></li>\n        <li><a>About</a></li>\n        <li><a>Colophon</a></li>\n        <li><a>Relase Notes</a></li>\n      </ul>\n    </div>\n  </footer>\n  <!-----------------x------------------footer--------------------------x------------------------ -->\n  <script src=\"../assets/js/home.js\"></script>\n  <!-- -------------x-------------main section-------------------------x------------------->\n</body>\n\n</html>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(getDataService) {
        this.getDataService = getDataService;
        this.series = [];
        this.films = [];
        this.documentaries = [];
        this.title = 'assignment-for-media-choice';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDataService.getOttxperiencedata().subscribe(function (res) {
            _this.metaData = res['MetaData'];
            _this.metaData.forEach(function (element) {
                switch (element.ContentType) {
                    case 'Serie':
                        _this.series.push({
                            "type": 'Series',
                            "Title": element.Title,
                            "poster": element.LargeVisual
                        });
                        break;
                    case 'Film':
                        _this.films.push({
                            "type": 'Film',
                            "Title": element.Title,
                            "poster": element.LargeVisual
                        });
                        break;
                    case 'Documentary':
                        _this.documentaries.push({
                            "type": 'Documentary',
                            "Title": element.Title,
                            "poster": element.LargeVisual
                        });
                        break;
                    default:
                        break;
                }
            });
            console.log(res['MetaData'][0].ContentType);
        });
        this.loadScript("../assets/js/home.js");
    };
    AppComponent.prototype.loadScript = function (url) {
        var body = document.body;
        var script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    };
    AppComponent.prototype.moveSlides = function (n) {
        plusSlides(n);
    };
    AppComponent.prototype.SliderArrowClicked = function (direction, id, e) {
        SliderArrowClicked(direction, id, e);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-data.service */ "./src/app/get-data.service.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_get_data_service__WEBPACK_IMPORTED_MODULE_6__["GetDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/get-data.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-data.service.ts ***!
  \*************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GetDataService = /** @class */ (function () {
    function GetDataService(httpClient) {
        this.httpClient = httpClient;
    }
    // getting the data from api call for the dashborad
    GetDataService.prototype.getOttxperiencedata = function () {
        return this.httpClient.get('https://outtvapp.ottxperience.com/Backend.svc/getallfilteredmetadata');
    };
    GetDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GetDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], GetDataService);
    return GetDataService;
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

module.exports = __webpack_require__(/*! D:\Assignment\assignment-for-media-choice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map