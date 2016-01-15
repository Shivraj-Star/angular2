import {Component} from 'angular2/core';
import * as pipe from './pipe';

@Component({
  templateUrl: 'app/Views/pipe/filter.html',
  pipes: [pipe.Square]
})
export class filterComponent {
  constructor() {
    this.filter = {}
  }
}
