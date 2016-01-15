import {Component} from 'angular2/core';
import {authService} from '/app/service/user.service';
import {listComponent} from '/app/Views/list/list';

@Component({
  templateUrl: 'app/Views/signUp/signup.html',
  directives: [listComponent]
})
export class signUpComponent {
  constructor(public authservice: authService) {
    this.user = {}
  }


  save(userObj) {
    this.authservice.authList.push(userObj);
    this.user = {};
    console.log(this.authservice.authList);
  }

  update(obj) {
    this.user = obj;
  }
  clear() {
    this.user = {};
  }
  delete(obj) {
    this.todo = obj.name;
    _.remove(this.authservice.authList, obj);
  }
}
