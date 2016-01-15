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
    var listComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            listComponent = (function () {
                function listComponent(authservice) {
                    this.authservice = authservice;
                }
                listComponent.prototype.delete = function (obj) {
                    _.remove(this.authservice.authList, obj);
                };
                listComponent.prototype.validate = function (loginObj) {
                    console.log(loginObj);
                };
                listComponent = __decorate([
                    core_1.Component({
                        selector: 'item-list',
                        templateUrl: '../app/Views/list/list.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.authService !== 'undefined' && user_service_1.authService) === 'function' && _a) || Object])
                ], listComponent);
                return listComponent;
                var _a;
            })();
            exports_1("listComponent", listComponent);
        }
    }
});
//# sourceMappingURL=list.js.map