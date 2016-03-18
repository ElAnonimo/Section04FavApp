import {Component, Input} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
	selector: 'authors',
	template: `
						<h2>Authors</h2>
						{{ title }}
						<ul>
							<li *ngFor="#author of authors">{{ author }}</li>
						</ul>
						<div (click)="onDivClick()"><button (click)="onClick($event)" class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'green'" [class.active]="isActive">Submit</button></div>
						<input type="text" [value]="title" (input)="title = $event.target.value">
						Preview: {{title}}
						<i class="glyphicon" (click)="onFavClick()" [class.glyphicon-star]="isFav" [class.glyphicon-star-empty]="!isFav"></i>
						`,
	providers: [AuthorService]
})
export class AuthorsComponent {
	title: string = "The Authors";
	authors: string[];
	
	constructor(authorService: AuthorService) {
		this.authors = authorService.getAuthors();
	}
	
	isActive = false;
	
	onClick($event) {
		console.log('Ня! From button.');
		console.log($event);
		$event.stopPropagation();
	}
	
	onDivClick() {
		console.log('From div.');
	}
	
	@Input() isFav = false;
	onFavClick() {
		this.isFav = !this.isFav;
	}
	
}