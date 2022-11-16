import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './posts/index.component';
import { LikeComponent } from './like/index.component';
import { PostComponent } from './post-item/index.component';

@NgModule({
  imports: [
		BrowserModule,
		FormsModule
	],
  declarations: [
		AppComponent,
		LikeComponent,
		PostComponent ],
  bootstrap: [
		AppComponent
	]
})
export class AppModule { }

