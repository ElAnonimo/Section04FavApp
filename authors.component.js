System.register(['angular2/core', './author.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, author_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (author_service_1_1) {
                author_service_1 = author_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = (function () {
                function AuthorsComponent(authorService) {
                    this.title = "The Authors";
                    this.isActive = false;
                    this.isFav = false;
                    this.authors = authorService.getAuthors();
                }
                AuthorsComponent.prototype.onClick = function ($event) {
                    console.log('Ня! From button.');
                    console.log($event);
                    $event.stopPropagation();
                };
                AuthorsComponent.prototype.onDivClick = function () {
                    console.log('From div.');
                };
                AuthorsComponent.prototype.onFavClick = function () {
                    this.isFav = !this.isFav;
                };
                AuthorsComponent = __decorate([
                    core_1.Component({
                        selector: 'authors',
                        template: "\n\t\t\t\t\t\t<h2>Authors</h2>\n\t\t\t\t\t\t{{ title }}\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li *ngFor=\"#author of authors\">{{ author }}</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div (click)=\"onDivClick()\"><button (click)=\"onClick($event)\" class=\"btn btn-primary\" [style.backgroundColor]=\"isActive ? 'blue' : 'green'\" [class.active]=\"isActive\">Submit</button></div>\n\t\t\t\t\t\t<input type=\"text\" [value]=\"title\" (input)=\"title = $event.target.value\">\n\t\t\t\t\t\tPreview: {{title}}\n\t\t\t\t\t\t<i class=\"glyphicon\" (click)=\"onFavClick()\" [class.glyphicon-star]=\"isFav\" [class.glyphicon-star-empty]=\"!isFav\"></i>\n\t\t\t\t\t\t",
                        providers: [author_service_1.AuthorService]
                    }), 
                    __metadata('design:paramtypes', [author_service_1.AuthorService])
                ], AuthorsComponent);
                return AuthorsComponent;
            }());
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map