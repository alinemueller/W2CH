(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Boot operations
*/
var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    return this.ready();
  }

  _createClass(_default, [{
    key: "ready",
    value: function ready() {
      return new Promise(function (resolve, reject) {
        document.addEventListener("DOMContentLoaded", function () {
          // let initData = {
          //     get: "Y"
          // };
          console.log('APP_ENV: sending to wix:', initData); // window.parent.postMessage(initData, "*");
          // Just a dummy condition

          if (/\w/.test(location.href)) {
            resolve();
          } else reject('Error');
        });
      });
    }
  }]);

  return _default;
}();

exports.default = _default;
;

},{}],2:[function(require,module,exports){
"use strict";

var _Boot = _interopRequireDefault(require("../../js/modules/Boot/Boot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Boot module", function () {
  it("should be defined", function () {
    var boot = new _Boot.default();
    expect(boot.then).toBeDefined();
  });
});

},{"../../js/modules/Boot/Boot":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbW9kdWxlcy9Cb290L0Jvb3QuanMiLCJzcmMvdGVzdC9tb2R1bGVzL0Jvb3RTcGVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFLSSxzQkFBYztBQUFBOztBQUNWLFdBQU8sS0FBSyxLQUFMLEVBQVA7QUFDSDs7Ozs0QkFFTztBQUNKLGFBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUNwQyxRQUFBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxVQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksMEJBQVosRUFBd0MsUUFBeEMsRUFKZ0QsQ0FLakQ7QUFDQzs7QUFDQSxjQUFJLEtBQUssSUFBTCxDQUFVLFFBQVEsQ0FBQyxJQUFuQixDQUFKLEVBQThCO0FBQzFCLFlBQUEsT0FBTztBQUNWLFdBRkQsTUFHSyxNQUFNLENBQUMsT0FBRCxDQUFOO0FBQ1IsU0FYRDtBQVlILE9BYk0sQ0FBUDtBQWNIOzs7Ozs7O0FBR0o7Ozs7O0FDM0JEOzs7O0FBRUEsUUFBUSxDQUFDLGFBQUQsRUFBZ0IsWUFBVTtBQUU5QixFQUFBLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixZQUFVO0FBQzlCLFFBQUksSUFBSSxHQUFHLElBQUksYUFBSixFQUFYO0FBQ0EsSUFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQU4sQ0FBTixDQUFrQixXQUFsQjtBQUNILEdBSEMsQ0FBRjtBQUtILENBUE8sQ0FBUiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXHJcbiAgQm9vdCBvcGVyYXRpb25zXHJcbiovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBpbml0RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBnZXQ6IFwiWVwiXHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FQUF9FTlY6IHNlbmRpbmcgdG8gd2l4OicsIGluaXREYXRhKVxyXG4gICAgICAgICAgICAgICAvLyB3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKGluaXREYXRhLCBcIipcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBKdXN0IGEgZHVtbXkgY29uZGl0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAoL1xcdy8udGVzdChsb2NhdGlvbi5ocmVmKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcmVqZWN0KCdFcnJvcicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufTtcclxuIiwiaW1wb3J0IEJvb3QgZnJvbSBcIi4uLy4uL2pzL21vZHVsZXMvQm9vdC9Cb290XCI7XHJcblxyXG5kZXNjcmliZShcIkJvb3QgbW9kdWxlXCIsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaXQoXCJzaG91bGQgYmUgZGVmaW5lZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBib290ID0gbmV3IEJvb3QoKTtcclxuICAgICAgICBleHBlY3QoYm9vdC50aGVuKS50b0JlRGVmaW5lZCgpO1xyXG4gICAgfSk7XHJcblxyXG59KTtcclxuIl19
