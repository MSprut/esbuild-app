import { Component, Input, Output, EventEmitter } from '@angular/core';
import templatePost from "./index.component.html";

@Component({
  selector: 'post',
  template: templatePost
})
export class PostComponent  {
  @Input() title: string;
  @Input() content: string;
  postLikes : number = 0;

  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();

  onPostLikesUpdate = function(newNumberOfLikes) {
    this.postLikes = newNumberOfLikes;
  }

  onRemovePostClick = function() {
    this.change.emit(this);
  }
}
