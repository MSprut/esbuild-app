import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

import templateString from "./index.component.html";
import { PostService } from "../post.service";
import { Post } from "../post.class";

@Component({
	selector: "post",
	template: templateString,
})
export class PostIndexComponent implements OnInit {
	posts: Post[];
	modalRef: BsModalRef;
	postForm: FormGroup;
	isNew: Boolean;

	constructor(
		public fb: FormBuilder,
		private postService: PostService,
		private modalService: BsModalService
	) {}

	public newPost(template: TemplateRef<any>) {
		this.reset();
		this.modalRef = this.modalService.show(template);
	}

	public createPost() {
		this.postService.create(this.postForm.value).subscribe(() => {
			console.log("Post created!");
			this.reset();

			this.modalRef.hide();
		});
	}

	public editPost(post, template: TemplateRef<any>) {
		this.isNew = false;
		this.postForm = this.fb.group({
			id: [post.id],
			title: [post.title],
			description: [post.description],
		});

		this.modalRef = this.modalService.show(template);
	}

	public updatePost() {
		const { id } = this.postForm.value;
		this.postService.update(id, this.postForm.value).subscribe(() => {
			console.log("Post updated!");
			this.reset();

			this.modalRef.hide();
		});
	}

	public deletePost(id) {
		if (confirm("Are you sure?")) {
			this.postService.delete(id).subscribe(() => {
				console.log("Post deleted!");
				this.reset();
			});
		}
	}

	ngOnInit() {
		this.reset();
	}

	public reset() {
		console.log('get posts');
		this.isNew = true;
		this.postService.getPosts().subscribe((posts) => {
			this.posts = posts;
		});

		this.postForm = this.fb.group({
			id: [""],
			title: [""],
			description: [""],
		});
	}
}
