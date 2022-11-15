import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { Post } from "./post.class";

@Injectable({
	providedIn: "root",
})
export class PostService {
	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			"Content-Type": "application/json",
		}),
	};

	getPosts(): Observable<Post[]> {
		return this.http.get("/posts.json").pipe(
			map((posts: Post[]) =>
				posts.map((post) => {
					return new Post(post.id, post.title, post.description);
				})
			)
		);
	}

	create(post): Observable<Post> {
		return this.http.post<Post>(
			"/posts.json",
			JSON.stringify(post),
			this.httpOptions
		);
	}

	update(id, post): Observable<Post> {
		return this.http.put<Post>(
			"/posts/" + id + ".json",
			JSON.stringify(post),
			this.httpOptions
		);
	}

	delete(id) {
		return this.http.delete<Post>("/posts/" + id + ".json", this.httpOptions);
	}
}
