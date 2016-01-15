import {Component} from 'angular2/core';
import {authService} from "/app/service/user.service";
import {listComponent} from '/app/Views/list/list';
@Component({
  templateUrl: '../app/Views/login/login.html',
  directives: [listComponent]
})

export class loginComponent {
  constructor(public authservice: authService) {
    this.login = {};
  }
  delete(obj) {
    _.remove(this.authservice.authList, obj);
  }

  validate(loginObj) {
    console.log(loginObj);
  }
  clear() {
    this.login = {};
  }
}
