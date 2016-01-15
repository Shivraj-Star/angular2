import {Component} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';


@Component({
    templateUrl: '../app/Views/home/home.html',
    viewProviders: [HTTP_PROVIDERS],

})
export class homeComponent {
    constructor(http: Http) {
        //  enter your URL this is demo url
        http.get('http://localhost:9000/api/things')
            .subscribe(
            res => {
                this.list = res.json();
                console.log('Got response from API', this.list);
            },
            err => {
                console.error('error response from API', err);
            }
            );

    }
}
