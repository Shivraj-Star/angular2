import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {signUpComponent} from 'app/Views/signUp/signup';
import {loginComponent} from 'app/Views/login/login';

@Component({
  selector: 'my-app',
  templateUrl: 'app/router/router.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {
    path: '/signup',
    name: 'Signup',
    component: signUpComponent,
    useAsDefault: true
  },
  {path: '/login',name: 'Login',component: loginComponent},
])
export class AppComponent {}
