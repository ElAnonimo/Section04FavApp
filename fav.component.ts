import {Component, Input} from 'angular2/core'

@Component({
	selector: 'fav',
	template: `ghvjghvjgh
						<i class="glyphicon" (click)="onFavClick()" [class.glyphicon-star]="isFav" [class.glyphicon-star-empty]="!isFav"></i>
						`,
	inputs: ['isFav: is-fav']
})
export class FavComponent {
	@Input('is-fav') isFav = false;
	onFavClick() {
		this.isFav = !this.isFav;
	}
}