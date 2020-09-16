(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* @import url('./css/fonts.css'); */\nhtml,body{\n    margin: 0% !important;\n    padding:0% !important;\n    box-sizing: border-box;\n    overflow-x: hidden ;\n    font-family: Arial, Helvetica, sans-serif;\n    background-color: var(--bg-color);\n    \n}\n/* --------------------theme colors--------------------- */\n:root {\n    --bg-color: #fff;\n    --heading-color: #292922;\n    --secondary-color: #eceff4;\n    --side-shade1:rgba(255,255,255,.75);\n    --side-shade2:#1f2831;\n    --footer-font:black;\n    --light-grey:#6e7782;\n    --font-color: black;\n    \n\n}\n[data-theme=\"dark\"] {\n    --bg-color: #1f2831;\n    --heading-color: #ffff;\n    --secondary-color: #232d37;\n    --side-shade1:#33383eb5;\n    --side-shade2:#1f2831;\n    --footer-font:#ffff;\n    --light-grey:#6e7782;\n    --font-color: #ffffff;\n   \n    \n}\n/* -------------x-------theme colors---------x------------ */\n/* -----------global style ---------- */\na{\n    text-decoration: none;\n}\n.flex-row{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n}\nul{\n    list-style-type: none;\n    -webkit-padding-end: 40px;\n            padding-inline-end: 40px;\n}\n/* --------x---global style -----x----- */\n/* ---------------------------nav bar--------------------------------- */\n.navbar{\n    height:60px;\n    background-color: var(--secondary-color);\n    position: relative;\n    color:var( --font-color);\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);\n    /* overflow: hidden; */\n}\n.navbar .logo{\n    float: left;\n    height: inherit;\n    margin: 5px;\n}\n.topnav-centered  {\n    float: none;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n.topnav-centered  li{\n      display: inline-block;\n      padding: 0.5rem 1.8rem;\n      font-size: 1.2rem;\n      font-weight: bold;\n      \n  }\n.topnav-centered  li:hover{\n    cursor: pointer;\n    color:#8025ba;\n  }\n.topnav-centered  .border-right{\n    border-right: 1px dashed var(--light-grey);\n}\n.topnav-right ul{\n    float: right;\n    margin: 0px;\n    padding: 0px;\n  }\n.topnav-right ul li{\n      float: left;\n      position: relative;\n  }\n.user:hover{\n    cursor: pointer;\n    color:#8025ba;\n  }\n.user .dropdown{\n      display: none;\n      position: absolute;\n      top: 50px;\n      right: 0;\n      width: 180px;\n\n  }\n.user.active\n  .dropdown{\n    display: block; \n    z-index: 1;\n  }\n.topnav-right ul li a{\n      display: block;\n      padding: 21px;\n      font-size: 1.1em;\n      \n  }\n.topnav-right ul li ul li{\n    width: 100%;\n  }\n.topnav-right ul li ul li a{\n      padding: 10px;\n      background-color: white;\n      color: black;\n  }\n/* ---------------x-----------nav------------------x -------------*/\n/* -----------------------------main------------------------------ */\nmain .banner-container{\n    background-size: cover;\n    height: 400px;\n\n}\n.banner-container .slideshow-container{\nbackground-color: rgba(0,0,0,.5);\nheight: 100%;\nwidth: 100%;\noverflow: hidden;\nposition: relative;\n}\n.banner-container .slideshow-container .image-holder{\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    opacity: 0;\n}\n.banner-container .slideshow-container .image-holder img{\n    width: 100%;\n    height: 100%;\n    background-size: 100%;\n    background-position:center;\n}\n.banner-container .slideshow-container .image-holder p{\ndisplay: none;\n}\n.banner-container .slideshow-container:hover  .left-arrow-box,\n.banner-container .slideshow-container:hover .right-arrow-box{\n    cursor: pointer;\n    width: 50px;\n    background:var(--side-shade2);\n    position: absolute;\n    left: 0;\n    z-index: 1;\n    -webkit-transition:background 0.5s;\n    transition:background 0.5s;\n    height: 100%;\n    top:50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.banner-container .slideshow-container:hover  .right-arrow-box{\n    left: auto;\n    right: 0;\n}\n.banner-container .slideshow-container .arrow{\ndisplay: inline-block;\nborder: 3px solid white;\nwidth: 10px;\nheight: 10px;\nborder-left: none;\nborder-bottom:none;\nmargin: auto;\nposition: absolute;\nleft: 0;\nright: 0;\ntop: 0;\nbottom: 0;\n}\n.banner-container .slideshow-container  .arrow-left{\n    -webkit-transform: rotateZ(-135deg);\n            transform: rotateZ(-135deg);\n}\n.banner-container .slideshow-container  .arrow-right{ \n    -webkit-transform: rotateZ(45deg); \n            transform: rotateZ(45deg);\n}\n.banner-container .slideshow-container .captionTextHolder{\n    position: absolute;\n    bottom: 0;\n    z-index: 1;\n    color: white;\n    font-family: sans-serif;\n    font-size: 20px;\n    text-align: center;\n    width: 30%;\n    height: 200px;\n    overflow: hidden;\n}\n.banner-container .slideShowContainer>.captionTextHolder>.captionText1,.banner-container .slideShowContainer>.captionTextHolder>.captionText2{\n    margin: 0;\n}\n.watch-btn{\n    background-color: #e9ebec;\n    padding: 12px 42px;\n    border: none;\n    font-size: 24px;\n    font-family: sans-serif;\n    border-radius: 4px;\n}\n.banner-container .moveLeftCurrentSlide{\n    -webkit-animation-name: moveLeftCurrent;\n            animation-name: moveLeftCurrent;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    -webkit-animation-fill-mode:forwards;\n            animation-fill-mode:forwards;\n\n}\n.banner-container .moveLeftNextSlide{\n    -webkit-animation-name: moveLeftNext;\n            animation-name: moveLeftNext;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    -webkit-animation-fill-mode:forwards;\n            animation-fill-mode:forwards;\n}\n@-webkit-keyframes moveLeftCurrent {\n    from {margin-left: 0;opacity: 1;}\n    to {margin-left: -100%;opacity: 1;}\n}\n@keyframes moveLeftCurrent {\n    from {margin-left: 0;opacity: 1;}\n    to {margin-left: -100%;opacity: 1;}\n}\n@-webkit-keyframes moveLeftNext {\n    from {margin-left: 100%;opacity: 1;}\n    to {margin-left: 0%;opacity: 1;}\n}\n@keyframes moveLeftNext {\n    from {margin-left: 100%;opacity: 1;}\n    to {margin-left: 0%;opacity: 1;}\n}\n.banner-container .moveRightCurrentSlide{\n    -webkit-animation-name: moveRightCurrent;\n            animation-name: moveRightCurrent;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    -webkit-animation-fill-mode:forwards;\n            animation-fill-mode:forwards;\n}\n.banner-container .moveRightPrevSlide{\n    -webkit-animation-name: moveRightPrev;\n            animation-name: moveRightPrev;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-timing-function: linear;\n            animation-timing-function: linear;\n    -webkit-animation-fill-mode:forwards;\n            animation-fill-mode:forwards;\n}\n@-webkit-keyframes moveRightCurrent {\n    from {margin-left: 0;opacity: 1;}\n    to {margin-left: 100%;opacity: 1;}\n}\n@keyframes moveRightCurrent {\n    from {margin-left: 0;opacity: 1;}\n    to {margin-left: 100%;opacity: 1;}\n}\n@-webkit-keyframes moveRightPrev {\n    from {margin-left: -100%;opacity: 1;}\n    to {margin-left: 0%;opacity: 1;}\n}\n@keyframes moveRightPrev {\n    from {margin-left: -100%;opacity: 1;}\n    to {margin-left: 0%;opacity: 1;}\n}\n.slideTextFromBottom {\n    -webkit-animation-name: slideTextFromBottom;\n            animation-name: slideTextFromBottom;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n@-webkit-keyframes slideTextFromBottom {\n    /* 0%{\n        opacity: 1;margin-top: -50px;\n        } */\n    /* from {opacity: 0;margin-top: 100px}\n    to {opacity: 1;margin-top: 0px;} */\n}\n@keyframes slideTextFromBottom {\n    /* 0%{\n        opacity: 1;margin-top: -50px;\n        } */\n    /* from {opacity: 0;margin-top: 100px}\n    to {opacity: 1;margin-top: 0px;} */\n}\n.slideTextFromTop {\n    -webkit-animation-name: slideTextFromTop;\n            animation-name: slideTextFromTop;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n}\n@-webkit-keyframes slideTextFromTop {\n    /* 0%{\n    opacity: 1;margin-top: 50px;\n    } */\n    \n}\n@keyframes slideTextFromTop {\n    /* 0%{\n    opacity: 1;margin-top: 50px;\n    } */\n    \n}\n/* .btn-animation{\n    animation-name: popinto;\n    animation-duration: 3s;\n}\n@keyframes popinto{\n    0%{\n        opacity: 0; margin-bottom: 2px;\n    }\n    50%{\n        opacity: 1; margin-bottom: 40px;\n    }\n} */\n/* ------------------------------ character slider--------------------------- */\n.character-container{\n    margin: 7px 0px;\n    margin-bottom: 47px;\n    width: 100%;\n    height: 268px;\n}\n.character-container:hover{\n    cursor: pointer;\n}\n.wrapper {\n    height: 267px;\n    position: relative;\n    margin: 0 auto;\n  }\n.button-wrapper {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    position: absolute;\n  }\n.carousel {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    position: absolute;\n    left: 0;\n    -webkit-transition: all 1s ease;\n    transition: all 1s ease;\n  }\n.card {\n    display: inline-block;\n    white-space: normal;\n    margin: 0 2.5px;\n    cursor: pointer;\n    position: relative;\n    opacity: 1;\n    top:0;\n    -webkit-transition: top ease 0.5s;\n    transition: top ease 0.5s;\n}\n.card:hover{\n    top:-10px;\n}\n.item{    \n    white-space: normal;\n    margin: -23px 2.5px;\n    cursor: pointer;\n    position: relative;\n    opacity: 1;\n    height: 332px;\n    padding: 20px;;\n  }\n.character-container:hover  .button-wrapper .left-arrow-box,\n.character-container:hover  .button-wrapper .right-arrow-box{\n    width: 50px;\n    background: var(--side-shade1);\n    position: absolute;\n    left: 0;\n    z-index: 1;\n    -webkit-transition:background 0.5s;\n    transition:background 0.5s;\n    height: 100%;\n    top:50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    }\n.character-container:hover   .button-wrapper .right-arrow-box{\n        left: auto;\n        right: 0;\n    }\n.character-container:hover  .button-wrapper .arrow{\n        display: inline-block;\n        border: 3px solid var(--font-color);\n        width: 10px;\n        height: 10px;\n        border-left: none;\n        border-bottom:none;\n        margin: auto;\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        }\n.button-wrapper  .arrow-left{\n            -webkit-transform: rotateZ(-135deg);\n                    transform: rotateZ(-135deg);\n        }\n.button-wrapper .arrow-right{ \n            -webkit-transform: rotateZ(45deg); \n                    transform: rotateZ(45deg);\n        }\n/* --------------x---------------- character slider------------x--------------- */\n/* ------------------------category container ----------------------------------- */\n.category-container{\n    display: inline-block;\n    width: 100%;\n    position: relative;\n    z-index: 1;\n    height: 327px;\n}\n.category-header{\n    background-image: linear-gradient(120deg, #f348bb 0%,  #9e27e4 100%);\n    height: 40px;\n    width: 100%;\n    display: inline-block;\n    text-align: center;\n}\nh4{\n    font-size: 17px;\n    font-weight: 700;\n}\n.category-name{\n    line-height: 0px;\n    color: white;\n}\n.category-control{\n    background: var(--secondary-color);\n    width: 100%;\n    display: inline-block;\n    height: 40px;\n    margin-top: 10px;\n    position: relative;\n    z-index: 1;\n}\n.category-control-container{\n    display: table;\n    height: 40px;\n    margin: 0 auto;\n}\n.category-control-container i{\n    padding: 11PX;\n    FONT-SIZE: 20px;\n    color: #b9afaf;\n}\n.category-slider{\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align:center;\n            align-items:center;\n}\n.category-slider li{\n    display: inline-block;\n}\n.category-item-box{\n    width: 400px;\n    margin: 10px 2.5px;\n    height: 200px;\n    position: relative;\n    top:0;\n    -webkit-transition: top ease 0.5s;\n    transition: top ease 0.5s;\n}\n.category-item-box:hover{\n    top:-10px;\n}\n.category-item-box img{\n    width: 100%;\n    height: 100%;\n    border-radius: 10px;\n\n}\n.category-item-box .category-item-caption-holder{\n        position: absolute;\n        bottom: 0;\n        z-index: 1;\n        font-family: sans-serif;\n        width: 100%;\n        /* background: rgba(255,255,255,.75); */\n        background: var(--side-shade1);\n        height: 30%;\n        overflow: hidden;\n    }\n.category-item-title{\n        line-height: 30px;\n        margin: 1px 4px;\n        font-size: 17px;\n        font-weight: 700;\n        color: var(--font-color);\n    }\n.category-item-type{\n        font-size: 17px;\n        color: #dadde0;\n        margin: 0px 8px;\n     }\n.category-container:hover  .category-slider .left-arrow-box,\n   .category-container:hover .category-slider .right-arrow-box{\n    width: 50px;\n    /* background: #faf9f936; */\n    background: var(--side-shade1);\n    position: absolute;\n    left: 0;\n    z-index: 1;\n    -webkit-transition:background 0.5s;\n    transition:background 0.5s;\n    height: 200px;\n    top: 62%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n.category-container:hover  .category-slider .right-arrow-box{\n    left: auto;\n    right: 0;\n}\n.category-container:hover .category-slider .arrow{\n    display: inline-block;\n    border: 3px solid var(--font-color);\n    width: 10px;\n    height: 10px;\n    border-left: none;\n    border-bottom:none;\n    margin: auto;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    }\n.category-container:hover  .category-slider  .arrow-left{\n        -webkit-transform: rotateZ(-135deg);\n                transform: rotateZ(-135deg);\n    }\n.category-container:hover .category-slider .arrow-right{ \n        -webkit-transform: rotateZ(45deg); \n                transform: rotateZ(45deg);\n    }\nfooter{\n        bottom: 0px;\n        width: 100%;\n        /* background: #eceff4; */\n        background: var(--secondary-color);\n        \n    }\n.footer-container{\n        display: -webkit-box;\n        display: flex;\n        margin-top: 20px;\n    }\n.footer-container .box{\n        color: var(--font-color);\n        position: relative;\n        flex-basis: 50%;\n        padding: 35px 20px;\n        text-align: center;\n        top:0;\n        -webkit-transition: top ease 0.5s;\n        transition: top ease 0.5s;\n}\n.footer-container .box p{\n        color:grey;\n    }\n.footer-container .box:hover{\n        cursor: pointer;\n        top: -10px;\n    }\n.footer-bottom{\n         background-image: linear-gradient(120deg, #f348bb 0%,  #9e27e4 100%);\n        text-align: center;\n        height: 18px;\n        padding: 14px;\n    }\n.footer-bottom ul{\n        margin: 0px;\n        color: white;\n    }\n.bottom-items li{\n        /* color: white; */\n        padding: 0px 22px;\n        display: inline-block;\n        margin:0 10px;\n    }\n.bottom-items li a{\n        font-size: 17px;\n        font-weight: 700;\n        line-height: 27px;\n        cursor: pointer;\n    \n    }\n.bottom-items li a:hover{\n        text-decoration: underline;\n    }\n/* -------------x-----------category container --------------------x--------------- */\n/* ----------------x-------------main----------------x-------------- */\n/* -----------------sytle of toggle switch---------------------------------- */\n\n/*# sourceMappingURL=data:application/json;base64,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cmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBpbXBvcnQgdXJsKCcuL2Nzcy9mb250cy5jc3MnKTsgKi9cbmh0bWwsYm9keXtcbiAgICBtYXJnaW46IDAlICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzowJSAhaW1wb3J0YW50O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuIDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tdGhlbWUgY29sb3JzLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gOnJvb3Qge1xuICAgIC0tYmctY29sb3I6ICNmZmY7XG4gICAgLS1oZWFkaW5nLWNvbG9yOiAjMjkyOTIyO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjZWNlZmY0O1xuICAgIC0tc2lkZS1zaGFkZTE6cmdiYSgyNTUsMjU1LDI1NSwuNzUpO1xuICAgIC0tc2lkZS1zaGFkZTI6IzFmMjgzMTtcbiAgICAtLWZvb3Rlci1mb250OmJsYWNrO1xuICAgIC0tbGlnaHQtZ3JleTojNmU3NzgyO1xuICAgIC0tZm9udC1jb2xvcjogYmxhY2s7XG4gICAgXG5cbn1cbltkYXRhLXRoZW1lPVwiZGFya1wiXSB7XG4gICAgLS1iZy1jb2xvcjogIzFmMjgzMTtcbiAgICAtLWhlYWRpbmctY29sb3I6ICNmZmZmO1xuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMjMyZDM3O1xuICAgIC0tc2lkZS1zaGFkZTE6IzMzMzgzZWI1O1xuICAgIC0tc2lkZS1zaGFkZTI6IzFmMjgzMTtcbiAgICAtLWZvb3Rlci1mb250OiNmZmZmO1xuICAgIC0tbGlnaHQtZ3JleTojNmU3NzgyO1xuICAgIC0tZm9udC1jb2xvcjogI2ZmZmZmZjtcbiAgIFxuICAgIFxufVxuLyogLS0tLS0tLS0tLS0tLXgtLS0tLS0tdGhlbWUgY29sb3JzLS0tLS0tLS0teC0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLWdsb2JhbCBzdHlsZSAtLS0tLS0tLS0tICovXG5he1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mbGV4LXJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxudWx7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogNDBweDtcbn1cbi8qIC0tLS0tLS0teC0tLWdsb2JhbCBzdHlsZSAtLS0tLXgtLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tbmF2IGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLm5hdmJhcntcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjp2YXIoIC0tZm9udC1jb2xvcik7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xufVxuXG4ubmF2YmFyIC5sb2dve1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICBtYXJnaW46IDVweDtcbn1cbi50b3BuYXYtY2VudGVyZWQgIHtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIC50b3BuYXYtY2VudGVyZWQgIGxpe1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcGFkZGluZzogMC41cmVtIDEuOHJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBcbiAgfVxuICAudG9wbmF2LWNlbnRlcmVkICBsaTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IzgwMjViYTtcbiAgfVxuIFxuICAudG9wbmF2LWNlbnRlcmVkICAuYm9yZGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCB2YXIoLS1saWdodC1ncmV5KTtcbn1cblxuICAudG9wbmF2LXJpZ2h0IHVse1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLnRvcG5hdi1yaWdodCB1bCBsaXtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC51c2VyOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjojODAyNWJhO1xuICB9XG4gIC51c2VyIC5kcm9wZG93bntcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUwcHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxODBweDtcblxuICB9IFxuICAudXNlci5hY3RpdmVcbiAgLmRyb3Bkb3due1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgLnRvcG5hdi1yaWdodCB1bCBsaSBhe1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiAyMXB4O1xuICAgICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICAgIFxuICB9XG4gXG4gIC50b3BuYXYtcmlnaHQgdWwgbGkgdWwgbGl7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnRvcG5hdi1yaWdodCB1bCBsaSB1bCBsaSBhe1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgY29sb3I6IGJsYWNrO1xuICB9ICBcblxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLXgtLS0tLS0tLS0tLW5hdi0tLS0tLS0tLS0tLS0tLS0tLXggLS0tLS0tLS0tLS0tLSovXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLW1haW4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbm1haW4gLmJhbm5lci1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuXG59XG4uYmFubmVyLWNvbnRhaW5lciAuc2xpZGVzaG93LWNvbnRhaW5lcntcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuaGVpZ2h0OiAxMDAlO1xud2lkdGg6IDEwMCU7XG5vdmVyZmxvdzogaGlkZGVuO1xucG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lci1jb250YWluZXIgLnNsaWRlc2hvdy1jb250YWluZXIgLmltYWdlLWhvbGRlcntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG59XG4uYmFubmVyLWNvbnRhaW5lciAuc2xpZGVzaG93LWNvbnRhaW5lciAuaW1hZ2UtaG9sZGVyIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xufVxuLmJhbm5lci1jb250YWluZXIgLnNsaWRlc2hvdy1jb250YWluZXIgLmltYWdlLWhvbGRlciBwe1xuZGlzcGxheTogbm9uZTtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5zbGlkZXNob3ctY29udGFpbmVyOmhvdmVyICAubGVmdC1hcnJvdy1ib3gsXG4uYmFubmVyLWNvbnRhaW5lciAuc2xpZGVzaG93LWNvbnRhaW5lcjpob3ZlciAucmlnaHQtYXJyb3ctYm94e1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXNpZGUtc2hhZGUyKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjVzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6NTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5zbGlkZXNob3ctY29udGFpbmVyOmhvdmVyICAucmlnaHQtYXJyb3ctYm94e1xuICAgIGxlZnQ6IGF1dG87XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5iYW5uZXItY29udGFpbmVyIC5zbGlkZXNob3ctY29udGFpbmVyIC5hcnJvd3tcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcbmJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xud2lkdGg6IDEwcHg7XG5oZWlnaHQ6IDEwcHg7XG5ib3JkZXItbGVmdDogbm9uZTtcbmJvcmRlci1ib3R0b206bm9uZTtcbm1hcmdpbjogYXV0bztcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbmxlZnQ6IDA7XG5yaWdodDogMDtcbnRvcDogMDtcbmJvdHRvbTogMDtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5zbGlkZXNob3ctY29udGFpbmVyICAuYXJyb3ctbGVmdHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEzNWRlZyk7XG59XG4uYmFubmVyLWNvbnRhaW5lciAuc2xpZGVzaG93LWNvbnRhaW5lciAgLmFycm93LXJpZ2h0eyBcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xufVxuLmJhbm5lci1jb250YWluZXIgLnNsaWRlc2hvdy1jb250YWluZXIgLmNhcHRpb25UZXh0SG9sZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5iYW5uZXItY29udGFpbmVyIC5zbGlkZVNob3dDb250YWluZXI+LmNhcHRpb25UZXh0SG9sZGVyPi5jYXB0aW9uVGV4dDEsLmJhbm5lci1jb250YWluZXIgLnNsaWRlU2hvd0NvbnRhaW5lcj4uY2FwdGlvblRleHRIb2xkZXI+LmNhcHRpb25UZXh0MntcbiAgICBtYXJnaW46IDA7XG59XG4ud2F0Y2gtYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWViZWM7XG4gICAgcGFkZGluZzogMTJweCA0MnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYmFubmVyLWNvbnRhaW5lciAubW92ZUxlZnRDdXJyZW50U2xpZGV7XG4gICAgYW5pbWF0aW9uLW5hbWU6IG1vdmVMZWZ0Q3VycmVudDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG5cbn1cbi5iYW5uZXItY29udGFpbmVyIC5tb3ZlTGVmdE5leHRTbGlkZXtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZUxlZnROZXh0O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbW92ZUxlZnRDdXJyZW50IHtcbiAgICBmcm9tIHttYXJnaW4tbGVmdDogMDtvcGFjaXR5OiAxO31cbiAgICB0byB7bWFyZ2luLWxlZnQ6IC0xMDAlO29wYWNpdHk6IDE7fVxufVxuQGtleWZyYW1lcyBtb3ZlTGVmdE5leHQge1xuICAgIGZyb20ge21hcmdpbi1sZWZ0OiAxMDAlO29wYWNpdHk6IDE7fVxuICAgIHRvIHttYXJnaW4tbGVmdDogMCU7b3BhY2l0eTogMTt9XG59XG5cblxuLmJhbm5lci1jb250YWluZXIgLm1vdmVSaWdodEN1cnJlbnRTbGlkZXtcbiAgICBhbmltYXRpb24tbmFtZTogbW92ZVJpZ2h0Q3VycmVudDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XG59XG4uYmFubmVyLWNvbnRhaW5lciAubW92ZVJpZ2h0UHJldlNsaWRle1xuICAgIGFuaW1hdGlvbi1uYW1lOiBtb3ZlUmlnaHRQcmV2O1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgbW92ZVJpZ2h0Q3VycmVudCB7XG4gICAgZnJvbSB7bWFyZ2luLWxlZnQ6IDA7b3BhY2l0eTogMTt9XG4gICAgdG8ge21hcmdpbi1sZWZ0OiAxMDAlO29wYWNpdHk6IDE7fVxufVxuQGtleWZyYW1lcyBtb3ZlUmlnaHRQcmV2IHtcbiAgICBmcm9tIHttYXJnaW4tbGVmdDogLTEwMCU7b3BhY2l0eTogMTt9XG4gICAgdG8ge21hcmdpbi1sZWZ0OiAwJTtvcGFjaXR5OiAxO31cbn1cbi5zbGlkZVRleHRGcm9tQm90dG9tIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVUZXh0RnJvbUJvdHRvbTtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlVGV4dEZyb21Cb3R0b20ge1xuICAgIC8qIDAle1xuICAgICAgICBvcGFjaXR5OiAxO21hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICB9ICovXG4gICAgLyogZnJvbSB7b3BhY2l0eTogMDttYXJnaW4tdG9wOiAxMDBweH1cbiAgICB0byB7b3BhY2l0eTogMTttYXJnaW4tdG9wOiAwcHg7fSAqL1xufVxuLnNsaWRlVGV4dEZyb21Ub3Age1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZVRleHRGcm9tVG9wO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbkBrZXlmcmFtZXMgc2xpZGVUZXh0RnJvbVRvcCB7XG4gICAgLyogMCV7XG4gICAgb3BhY2l0eTogMTttYXJnaW4tdG9wOiA1MHB4O1xuICAgIH0gKi9cbiAgICBcbn1cbi8qIC5idG4tYW5pbWF0aW9ue1xuICAgIGFuaW1hdGlvbi1uYW1lOiBwb3BpbnRvO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XG59XG5Aa2V5ZnJhbWVzIHBvcGludG97XG4gICAgMCV7XG4gICAgICAgIG9wYWNpdHk6IDA7IG1hcmdpbi1ib3R0b206IDJweDtcbiAgICB9XG4gICAgNTAle1xuICAgICAgICBvcGFjaXR5OiAxOyBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIH1cbn0gKi9cbiAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY2hhcmFjdGVyIHNsaWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gXG4uY2hhcmFjdGVyLWNvbnRhaW5lcntcbiAgICBtYXJnaW46IDdweCAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDdweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI2OHB4O1xufVxuLmNoYXJhY3Rlci1jb250YWluZXI6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLndyYXBwZXIge1xuICAgIGhlaWdodDogMjY3cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICAuYnV0dG9uLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgLmNhcm91c2VsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gIH1cbiAgXG4gIC5jYXJkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBtYXJnaW46IDAgMi41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDowO1xuICAgIHRyYW5zaXRpb246IHRvcCBlYXNlIDAuNXM7XG59XG4uY2FyZDpob3ZlcntcbiAgICB0b3A6LTEwcHg7XG59XG4gIC5pdGVteyAgICBcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG1hcmdpbjogLTIzcHggMi41cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMzMycHg7XG4gICAgcGFkZGluZzogMjBweDs7XG4gIH1cbi5jaGFyYWN0ZXItY29udGFpbmVyOmhvdmVyICAuYnV0dG9uLXdyYXBwZXIgLmxlZnQtYXJyb3ctYm94LFxuLmNoYXJhY3Rlci1jb250YWluZXI6aG92ZXIgIC5idXR0b24td3JhcHBlciAucmlnaHQtYXJyb3ctYm94e1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGUtc2hhZGUxKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjVzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6NTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gICAgLmNoYXJhY3Rlci1jb250YWluZXI6aG92ZXIgICAuYnV0dG9uLXdyYXBwZXIgLnJpZ2h0LWFycm93LWJveHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIC5jaGFyYWN0ZXItY29udGFpbmVyOmhvdmVyICAuYnV0dG9uLXdyYXBwZXIgLmFycm93e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5idXR0b24td3JhcHBlciAgLmFycm93LWxlZnR7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEzNWRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgLmJ1dHRvbi13cmFwcGVyIC5hcnJvdy1yaWdodHsgXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAgICAgICB9XG4gLyogLS0tLS0tLS0tLS0tLS14LS0tLS0tLS0tLS0tLS0tLSBjaGFyYWN0ZXIgc2xpZGVyLS0tLS0tLS0tLS0teC0tLS0tLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY2F0ZWdvcnkgY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uY2F0ZWdvcnktY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDMyN3B4O1xufVxuLmNhdGVnb3J5LWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjZjM0OGJiIDAlLCAgIzllMjdlNCAxMDAlKTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmg0e1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmNhdGVnb3J5LW5hbWV7XG4gICAgbGluZS1oZWlnaHQ6IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uY2F0ZWdvcnktY29udHJvbHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbn1cbi5jYXRlZ29yeS1jb250cm9sLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2F0ZWdvcnktY29udHJvbC1jb250YWluZXIgaXtcbiAgICBwYWRkaW5nOiAxMVBYO1xuICAgIEZPTlQtU0laRTogMjBweDtcbiAgICBjb2xvcjogI2I5YWZhZjtcbn1cbi5jYXRlZ29yeS1zbGlkZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uY2F0ZWdvcnktc2xpZGVyIGxpe1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5jYXRlZ29yeS1pdGVtLWJveHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDIuNXB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDowO1xuICAgIHRyYW5zaXRpb246IHRvcCBlYXNlIDAuNXM7XG59XG4uY2F0ZWdvcnktaXRlbS1ib3g6aG92ZXJ7XG4gICAgdG9wOi0xMHB4O1xufVxuLmNhdGVnb3J5LWl0ZW0tYm94IGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxufVxuLmNhdGVnb3J5LWl0ZW0tYm94IC5jYXRlZ29yeS1pdGVtLWNhcHRpb24taG9sZGVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC43NSk7ICovXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXNpZGUtc2hhZGUxKTtcbiAgICAgICAgaGVpZ2h0OiAzMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5jYXRlZ29yeS1pdGVtLXRpdGxle1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgbWFyZ2luOiAxcHggNHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB9XG4gICAgLmNhdGVnb3J5LWl0ZW0tdHlwZXtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogI2RhZGRlMDtcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xuICAgICB9XG4gICAuY2F0ZWdvcnktY29udGFpbmVyOmhvdmVyICAuY2F0ZWdvcnktc2xpZGVyIC5sZWZ0LWFycm93LWJveCxcbiAgIC5jYXRlZ29yeS1jb250YWluZXI6aG92ZXIgLmNhdGVnb3J5LXNsaWRlciAucmlnaHQtYXJyb3ctYm94e1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIC8qIGJhY2tncm91bmQ6ICNmYWY5ZjkzNjsgKi9cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zaWRlLXNoYWRlMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC41cztcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHRvcDogNjIlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn0gXG4uY2F0ZWdvcnktY29udGFpbmVyOmhvdmVyICAuY2F0ZWdvcnktc2xpZGVyIC5yaWdodC1hcnJvdy1ib3h7XG4gICAgbGVmdDogYXV0bztcbiAgICByaWdodDogMDtcbn1cbi5jYXRlZ29yeS1jb250YWluZXI6aG92ZXIgLmNhdGVnb3J5LXNsaWRlciAuYXJyb3d7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWZvbnQtY29sb3IpO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC5jYXRlZ29yeS1jb250YWluZXI6aG92ZXIgIC5jYXRlZ29yeS1zbGlkZXIgIC5hcnJvdy1sZWZ0e1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTEzNWRlZyk7XG4gICAgfVxuICAgIC5jYXRlZ29yeS1jb250YWluZXI6aG92ZXIgLmNhdGVnb3J5LXNsaWRlciAuYXJyb3ctcmlnaHR7IFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAgIH1cbiAgICBmb290ZXJ7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogYmFja2dyb3VuZDogI2VjZWZmNDsgKi9cbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5mb290ZXItY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuZm9vdGVyLWNvbnRhaW5lciAuYm94e1xuICAgICAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xuICAgICAgICBwYWRkaW5nOiAzNXB4IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIHRyYW5zaXRpb246IHRvcCBlYXNlIDAuNXM7XG59XG4gICAgLmZvb3Rlci1jb250YWluZXIgLmJveCBwe1xuICAgICAgICBjb2xvcjpncmV5O1xuICAgIH1cbiAgICBcbiAgICAuZm9vdGVyLWNvbnRhaW5lciAuYm94OmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgfVxuICAgIC5mb290ZXItYm90dG9te1xuICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgI2YzNDhiYiAwJSwgICM5ZTI3ZTQgMTAwJSk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgIH1cbiAgICAuZm9vdGVyLWJvdHRvbSB1bHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgLmJvdHRvbS1pdGVtcyBsaXtcbiAgICAgICAgLyogY29sb3I6IHdoaXRlOyAqL1xuICAgICAgICBwYWRkaW5nOiAwcHggMjJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46MCAxMHB4O1xuICAgIH1cbiAgICAuYm90dG9tLWl0ZW1zIGxpIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbiAgICB9XG4gICAgLmJvdHRvbS1pdGVtcyBsaSBhOmhvdmVye1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4vKiAtLS0tLS0tLS0tLS0teC0tLS0tLS0tLS0tY2F0ZWdvcnkgY29udGFpbmVyIC0tLS0tLS0tLS0tLS0tLS0tLS0teC0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS14LS0tLS0tLS0tLS0tLW1haW4tLS0tLS0tLS0tLS0tLS0teC0tLS0tLS0tLS0tLS0tICovXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tc3l0bGUgb2YgdG9nZ2xlIHN3aXRjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Assignment\assignment-for-media-choice\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map