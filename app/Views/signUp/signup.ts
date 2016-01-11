import {Component} from 'angular2/core';
import {authService} from '/app/service/user.service'
@Component({
  templateUrl: 'app/Views/signUp/signup.html'
})
export class signUpComponent {
  constructor(public authservice: authService) {
    this.user = {};
  }
  save(userObj) {
    this.authservice.authList.push(userObj);
    this.user = {};
    console.log(this.userList);
  }

  update(obj) {
    this.user = obj;
  }
  clear() {
    this.user = {};
  }
  delete(obj) {
    _.remove(this.authservice.authList, obj);
  }
}
