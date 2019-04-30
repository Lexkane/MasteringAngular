import { Component } from '@angular/core';
import { Logger } from './services/logger';
import { Colors } from './services/colors';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
	selector: "main",
	template: ` 
	<form [formGroup]="profileForm">
	<div> 
	<label form "first name linput">First Name </label>
	<input type ="text" id="first-name-input" formControllName="FirstNameInput">
	<br> Value{{profileForm.controls.['firstNameInput'].value}}
	</div>
	<div> 
	<label form "lirst name linput">Last Name </label>
	<input type ="text" id="last-name-input" formControllName="LastNameInput">
	<br> Value{{{profileForm.controls.['lastNameInput'].value}}
	</div>`
		< /form> 
	`
}

export class AppComponent {

	public profileForm: FormGroup=new FormGroup({

	public FirstNameInput = new FormControl('');
	public LastNameInput = new FormControl("");
	})
	public message: string = 'Hello World!';
	constructor(private colorsSvc: Colors) {
		this.colorsSvc.addColor('red');
		this.colorsSvc.addColor('white');
		this.colorsSvc.addColor('blue');
		this.colors = this.colorsSvc.getAll();
	}
};
