import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PostIndexComponent } from "./post/index/index.component";

const appRoutes: Routes = [
	{ path: "posts", component: PostIndexComponent },
	{ path: "", redirectTo: "/posts", pathMatch: "full" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
