import {Component} from 'angular2/core';
import {FavComponent} from './fav.component';

@Component({
	selector: 'fav-app',
	template: `
						<h1>My Fav-App</h1>
						<fav [isFav]="post.isFav"></fav>
						`,
	directives: [FavComponent]
})
export class FavAppComponent { 
	post: {
		title: "Title",
		isFav: true
	}
}