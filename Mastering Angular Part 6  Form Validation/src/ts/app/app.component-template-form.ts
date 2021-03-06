import { Component } from '@angular/core';

@Component({
	selector: 'main',
	styles:[
		"input.ng-invalid.ng-touched{border:2px solid red;margin :5px},",
		"input+span{display:none;}",
		"input.ng-invalid.ng-touched+span{display:inline}",
	],
	template: `
		<form #f="ngForm">
		<span *ngIf="f.valid">THe form is valid<span>
		<fieldset #g="ngModelGroup" ngModelGroup="someGroup">
		<span *ngIf="g.valid">The Model Group is Valid</span>
    "<input #c="ngModel" type="text" idx=="message-input" name="messageInput" required [(ngModel)]="message">
		<span> Message is required.</span>
		<span *ngIf="c.valid">The Model(control ) is Valid </span>
		</fieldset>
		</form>
		`,
})

export class AppComponent {
	public message: string = 'Hello World!';
}
