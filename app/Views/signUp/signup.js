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
    var signUpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            signUpComponent = (function () {
                function signUpComponent(authservice) {
                    this.authservice = authservice;
                    this.user = {};
                }
                signUpComponent.prototype.save = function (userObj) {
                    this.authservice.authList.push(userObj);
                    this.user = {};
                    console.log(this.userList);
                };
                signUpComponent.prototype.update = function (obj) {
                    this.user = obj;
                };
                signUpComponent.prototype.clear = function () {
                    this.user = {};
                };
                signUpComponent.prototype.delete = function (obj) {
                    _.remove(this.authservice.authList, obj);
                };
                signUpComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/Views/signUp/signup.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.authService !== 'undefined' && user_service_1.authService) === 'function' && _a) || Object])
                ], signUpComponent);
                return signUpComponent;
                var _a;
            })();
            exports_1("signUpComponent", signUpComponent);
        }
    }
});
//# sourceMappingURL=signup.js.map