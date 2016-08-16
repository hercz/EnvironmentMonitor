/**
 * Created by herczkumihalybalazs on 2016.08.15..
 */
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
var core_1 = require("@angular/core");
var app_component_service_1 = require("./app.component.service");
var EnvironmentData_1 = require("./EnvironmentData");
var AppComponent = (function () {
    function AppComponent(appComponentService) {
        this.appComponentService = appComponentService;
        this.environmentData = new EnvironmentData_1.EnvironmentData;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getDataFromServer();
    };
    AppComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this.appComponentService.getDataFromServer()
            .then(function (environmentData) {
            return _this.environmentData = environmentData;
        }, function (error) { return _this.errorMessage = error; });
    };
    AppComponent.prototype.logDataToConsole = function () {
        this.getDataFromServer();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [app_component_service_1.AppComponentService]
        }), 
        __metadata('design:paramtypes', [app_component_service_1.AppComponentService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map