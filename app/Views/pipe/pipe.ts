import {Pipe} from 'angular2/core';

@Pipe({
  name: "square"
})

export class Square {
  transform(value) {
    if (value)
      return value * value;
  }
}
