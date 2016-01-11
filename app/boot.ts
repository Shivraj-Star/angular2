import {AppComponent}     from './router/router';
import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {authService} from './service/user.service'

bootstrap(AppComponent, [ROUTER_PROVIDERS, authService]);
