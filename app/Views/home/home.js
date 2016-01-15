System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var homeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            homeComponent = (function () {
                function homeComponent(http) {
                    var _this = this;
                    //  enter your URL this is demo url
                    http.get('http://localhost:9000/api/things')
                        .subscribe(function (res) {
                        _this.list = res.json();
                        console.log('Got response from API', _this.list);
                    }, function (err) {
                        console.error('error response from API', err);
                    });
                }
                homeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../app/Views/home/home.html',
                        viewProviders: [http_1.HTTP_PROVIDERS],
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], homeComponent);
                return homeComponent;
            })();
            exports_1("homeComponent", homeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map