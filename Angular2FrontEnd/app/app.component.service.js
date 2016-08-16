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
/**
 * Created by herczkumihalybalazs on 2016.08.15..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("./rxjs-operators");
var AppComponentService = (function () {
    function AppComponentService(http) {
        this.http = http;
        this.dataSourceUrl = 'http://192.168.150.17:8081/environmentdata'; // URL to web API
    }
    AppComponentService.prototype.getDataFromServer = function () {
        return this.http.get(this.dataSourceUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AppComponentService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AppComponentService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Promise.reject(errMsg);
    };
    AppComponentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponentService);
    return AppComponentService;
}());
exports.AppComponentService = AppComponentService;
//# sourceMappingURL=app.component.service.js.map