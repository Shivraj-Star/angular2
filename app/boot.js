System.register(['./router/router', 'angular2/platform/browser', 'angular2/router', './service/user.service'], function(exports_1) {
    var router_1, browser_1, router_2, user_service_1;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(router_1.AppComponent, [router_2.ROUTER_PROVIDERS, user_service_1.authService]);
        }
    }
});
//# sourceMappingURL=boot.js.map