import { Component, Input, Output, EventEmitter } from '@angular/core';
import templateLike from "./index.component.html";

@Component({
  selector: 'like-box',
  template: templateLike,
})
export class LikeComponent  {
  @Input() numberOfLikes : number;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  likeButtonClick() {
    this.numberOfLikes++;
    this.change.emit(this.numberOfLikes);
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
    this.change.emit(this.numberOfLikes);
  }
}