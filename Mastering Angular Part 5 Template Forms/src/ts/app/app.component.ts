import { Component } from '@angular/core';

interface ContactData {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	state: string;
	comments: string;
}

@Component({
	selector: 'main',
	template: `
    <form {ngSubmit}="submitForm()">
    <div>
        <label for="first-name-input">First Name : </label>
        <input type="text" id ="message-name-input" name="firstNameInput"
         [(ngModel)]= "contact.firstName " 
    </div>
    <div>
        <labale for ="state-select">State:</label>
        <select id="state-select" name="stateSelect" [(ngModel)]="contact.state">
            <option value=""> Select One..<option>
            <option *ngFor="let state of staes" [value]="state[0]">{{state[1]}}</option>
        </select>    
    </div>

     <div>
        <label for="last-name-input">Last Name : </label>
        <input type="text" id ="last-name-input" name="lastNameInput"
         [(ngModel)]= "contact.lastName " 
    </div>
    <fieldset ngModelGroup="methodsOfContact">
        <legend>Method of Contact</legend>
     <div>
        <label for="phone">Phone : </label>
        <input type="text" id ="phone-input" name="phone"
         [(ngModel)]= "contact.phone " 
    </div>
    <div>
        <label for="email--input">Email : </label>
        <input type="text" id ="email-input" name="emailInput"
         [(ngModel)]= "contact.email "
    </div>
    </fieldset>
    <div>
    <laber for="comments-textarea">Comments:</label>
    <textarea id="comments-textarea"  name="commentsTextarea">[(ngModel)]="contact.comments"</textarea>
    </div>
    <button type="submit>Send</button>
    <button type="reset">Reset</button>
    <button (click)="doSomethingElse()">Do something Else</button>
    </form>
    `
})
export class AppComponent {
	public contact: ContactData = {
		firstName: '',
		lastName: '"',
		phone: '',
		email: '',
		state: '',
		comments: ''
	};
	public state = [
		[ 'VA', 'Virginia' ],
		[ 'CA', 'California' ],
		[ 'TX', 'Texas' ],
		[ 'FL', 'Florida' ],
		[ 'MD', 'Maryland' ]
	];

	public submitForm() {
		console.log(this.contact);
	}
	public doSomethingElse() {}
}
