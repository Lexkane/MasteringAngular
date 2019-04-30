import { Component,Directive } from '@angular/core';
import { FormControl,NG_ASYNC_VALIDATORS,AbstractControl,AsyncValidator } from '@angular/forms';
import {Observable} from "rxjs";
import {Books} from "./services/books";


const phoneNumberValidator = (control: FormControl) => {

	if (control.value==null || String(control.value).length==0){
		return null;
	}



	const re = new RegExp('^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.*]?\\d{3}[\\s.*]?\\d{4}$');
	if (! re.test(control.value)){
		return {
			phoneNumber:true,
		}
	}
	return null;
};

const validateBookId=(book:Books)=>{
	return (c:AbstractControl)=>{
		if (c.value==nul ||String(c.value).length===0){
				return Promise.resolve(null);
		}
		return new Promise ((resolve,reject)=>{
			books.getBook(Number(c.value)).subscribe(()=>{
				resolve(null);
			},()=>{
				resolve({bookId:true});
			}
		)};

}
const selectors=[
	"input [type=tel][ngModel]",
	"input [type=tel][formControl]",
	"input [type=tel][formControlName]",
	"[phone-number][ngModel]",
	"[phone-number][formControl]",
	"[phone-number][formControlName]",
];

@Directive({
	selector:selector.join(","),
	providers:[
		{provide:NG_VALIDATORS,useValue:phoneNUmberValidator,multi:true},
	]
})



@Directive ({
	selector:"[valid-book-id][ngModel]"
	providers:[
		{provide:NG_ASYNC_VALIDATORS,useExisting:forwardRef(()=>BookIdValidatorDirective ),multi:true,deps:[Books]}
	],
})
export class BookIdVakudatorDirective implements AsyncValidator{
	private validator:(c:AbstractControl)=>Promise<any> | Observable<any>;
		constructor (private books:Books){
			this.validator=validateBookIdFactory(this.books);

	}
	public validate(c:AbstractControl){
		return this.validator(c);
	}
}
export class PhoneNUmberValidatorDirective{}

@Component({
	selector: 'main',
	styles:[
		"input.ng-valid ~ span{display:none}",
	],
	template: `
   <div>
    <label for ="book-id-input">Book Id:</label>
    <input type="tel" id="book-id-input"valid-book-id [(ngModel)]="bookId">
    <span>
        Phone is required
    </span>
   </div>
    `
})
export class AppComponent {}
