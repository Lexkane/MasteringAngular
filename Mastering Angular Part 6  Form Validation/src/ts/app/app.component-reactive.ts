import { Component } from '@angular/core';
import {FormControl,Validators} from "@angular/forms";

@Component({
	selector: 'main',
	styles:[],
	template: `
	<div [formGroup]="formGroup">
	<label for="message-input">Message:</label>
	<input type="text" id="message-input" [formControl]="messageControl">
	<span *ngIf= "formGroup.controls.messageControl.invalid && formsGroup.controls.messageControl.touched">Please Enter message.</span>
	</div>
	`
})

export class AppComponent {
	public message: string = 'Hello World!';
	public formGroup=new FormGroup({
		messageControl:new FormControl("",Validators.required);
	});

}
