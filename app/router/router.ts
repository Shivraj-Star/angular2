import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {signUpComponent} from "app/Views/signUp/signup";
import {loginComponent} from "app/Views/login/login";
import {homeComponent} from "app/Views/home/home";
import {filterComponent} from "app/Views/pipe/filter";
@Component({
    selector: "my-app",
    templateUrl: "app/router/router.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: "/signup",
        name: "Signup",
        component: signUpComponent,
        useAsDefault: true
    },
    { path: "/login", name: "Login", component: loginComponent },
    { path: "/home", name: "Home", component: homeComponent },
    { path: "/filter", name: "Filter", component: filterComponent },
])
export class AppComponent { }
