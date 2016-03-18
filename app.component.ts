import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
	selector: 'my-app',
	template: `
						<h1>My First Angular 2 App</h1>
						<courses></courses>
						<authors></authors>
						<fav [is-fav]="post.isFav"></fav>
						`,
	directives: [CoursesComponent, AuthorsComponent, FavComponent]
})
export class AppComponent { 
	post: {
		title: "Title",
		isFav: true
	}
}