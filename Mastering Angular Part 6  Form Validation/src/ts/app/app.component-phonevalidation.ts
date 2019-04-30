import { Component } from '@angular/core';
import {FormControl,Validators} from "@angular/forms";

@Component({
	selector: 'main',
	styles:
	[
			"input.ng-invalid.ng-touched{border:2px solid red;margin :5px},",
			"input+span{display:none;}",
			"input.ng-invalid.ng-touched+span{display:inline}",
		],
	template: `
	<form>
		<fieldset ngModelGroup="someGroup">
			<div>
				<label for ="email-adress-input">Email adress:</label>
				<input type ="email" id ="email-adress-input" name ="emailAdressInput"
				email required [(ngModel)]='emailAdress'>
				<span>Email Adress is invalid.</span>
		</div>
	</fieldset>
	</form>
	`
})

export class AppComponent {

	public phoneNumber:string="";
	});

}
