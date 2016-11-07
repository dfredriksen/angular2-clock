"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//our root app component
var core_1 = require("@angular/core");
var ClockComponent = (function () {
    function ClockComponent(format, data, timer) {
        var _this = this;
        this.intervalSet = false;
        var date, miliseconds;
        this.format = format || 'h:mm:s';
        this.data = data || new Date();
        if (timer) {
            if (typeof this.data !== 'Date') {
                date = new Date();
            }
            else {
                date = this.data;
            }
            miliseconds = (60 - date.getSeconds()) * 1000;
            window.setTimeout(function () { _this.refreshTime(); }, miliseconds);
        }
    }
    ClockComponent.prototype.refreshTime = function () {
        var _this = this;
        this.data = new Date();
        if (!this.intervalSet) {
            window.setInterval(function () { _this.refreshTime(); }, 60000);
            this.intervalSet = true;
        }
    };
    return ClockComponent;
}());
ClockComponent = __decorate([
    core_1.Component({
        selector: 'clock',
        templateUrl: 'src/clock/view.html'
    }),
    __param(0, core_1.Attribute("format")), __param(1, core_1.Attribute("data")), __param(2, core_1.Attribute('timer')),
    __metadata("design:paramtypes", [Object, Object, Object])
], ClockComponent);
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=component.js.map