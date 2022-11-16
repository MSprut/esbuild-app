import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import templateString from "./index.component.html";

@Component({
  selector: 'posts-app',
  template: templateString,
})
export class AppComponent  {
  posts : object[];

  constructor() {
    this.posts = [{
      'title' : 'testing',
      'content': 'Bla'
    }];
  }

  onSubmit(f: NgForm) {
    let content = f.value.content;
    let title = f.value.title;
    this.posts.push({
      'title' : title,
      'content' : content
    })
  }

  onRemovePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
  }
}