import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./posts/index.component";

const appRoutes: Routes = [
	{ path: "posts", component: AppComponent },
	{ path: "", redirectTo: "/posts", pathMatch: "full" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes, { scrollPositionRestoration: "enabled" }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
