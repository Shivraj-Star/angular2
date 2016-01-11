System.register(['angular2/core', '/app/service/user.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, user_service_1;
    var loginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            loginComponent = (function () {
                function loginComponent(authservice) {
                    this.authservice = authservice;
                    this.login = {};
                }
                loginComponent.prototype.delete = function (obj) {
                    _.remove(this.authservice.authList, obj);
                };
                loginComponent.prototype.validate = function (loginObj) {
                    console.log(loginObj);
                };
                loginComponent.prototype.clear = function () {
                    this.login = {};
                };
                loginComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/Views/login/login.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.authService !== 'undefined' && user_service_1.authService) === 'function' && _a) || Object])
                ], loginComponent);
                return loginComponent;
                var _a;
            })();
            exports_1("loginComponent", loginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map