import {Component, Input} from 'angular2/core';
import {authService} from '/app/service/user.service';

@Component({
  selector: 'item-list'
    templateUrl: '../app/Views/list/list.html'
})

export class listComponent {
  constructor(public authservice: authService) {
}
delete (obj) {
  _.remove(this.authservice.authList, obj);
}

validate(loginObj) {
  console.log(loginObj);
}
}
