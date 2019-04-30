import { Component,Inject } from '@angular/core';
import {Logger} from "./services/logger";
import {Color} from "./services/colors";
import {ColorToken } from "./token/colors-token";
import {Colors} from "./models/colors";

@Component({
	selector: 'main',
	template: `
	<ul>
		<li *ngFor="let color of colors">{{color}}</li>
	</ul>
	`,
	providers: [ Logger ],
})

export class AppComponent {
	public message: string[] = [];

	constructor(@Inject(ColorsToken) private colorsSvc:Colors){
		this.colorsSvc.addColor("red");
		this.colorsSvc.addColor("white");
		this.colorsSvc.addColor("blue");
		this.colors=this.colorsSvc.getAll();
	}

}
